// This script is meant to update videos.json file so to avoid calling the YouTube API due to rate limiting issues

import fetch from 'node-fetch';
import * as fs from 'fs';

var apiKey = process.env['GOOGLE_API_KEY'];
var youtubeChannelId = 'UCQeL_8OTwzomVzcc2eZIXLg';

function getVideos() {
  fetch(
    'https://www.googleapis.com/youtube/v3/search?key=' +
      apiKey +
      '&channelId=' +
      youtubeChannelId +
      '&order=date&part=snippet&type=video,id&maxResults=50',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error(response.status + ': ' + response.statusText);
      }

      // Write to file
      return response.json().then(function (data) {
        fs.writeFile('src/app/@shared/videos.json', JSON.stringify(data), function (err) {
          if (err) throw new Error(err.message);
          else {
            console.log('File written successfully');
          }
        });
      });
    })
    .catch(function (error) {
      if (error instanceof Error) {
        console.log('Error: ' + error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    });
}

getVideos();
