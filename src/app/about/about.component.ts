import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamMemberComponent } from './team-member/team-member.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  teamMembers = [
    {
      name: 'Aayushi Darshana',
      photo: 'assets/team/aayushi.jpeg',
      subtitle: 'Co-Creator & Strategist | Principal - HR & Operations',
      description: `Aayushi has been working in the developmental sector for over twelve years and is a voracious
        “listener” who believes in the magic of inclusion. She is a new mom, learner and dreamer. Her expertise lies in
      creating synergies between people and their workspaces in not-for-profit sector by tailoring HR functions to the
        needs of development organisations. During her professional journey, she got to work on various thematic areas
      like health, education, women and child and disability.
        A Symbiosis International University alumni, she has completed her Masters in Human Resource Management from the
      University of Wales, UK. She is currently on her PhD journey because of her keen interest in exploring topics of
      inclusion and employment of people with special and diverse abilities and works toward creating safe workspaces that
      are inclusive and accepting of diversity.`
    },
    {
      name: 'Avinash Sharma',
      photo: 'assets/team/avinash.jpeg',
      subtitle: 'Co-Creator & Strategist | Principal - Networking & Community Building',
      description: `Avinash has been an entrepreneur for 9+ years now. Though he comes from a humble background and
        average schooling in Jaipur, he never let it stop him from chasing his dream of being an entrepreneur. Avinash
      believes in giving back to the entrepreneurship ecosystem of the country and with such a belief he works with
      Delhi government's Entrepreneurship Mindset Curriculum (EMC) program where he mentors school students in their
      business plans and entrepreneurial ambitions. His recently coached team Jhatpat Saree was selected in top 100
      teams out of thousands in the Business Plan Competition organised by the Delhi government for all government
        schools in Delhi. As an individual always wanting to hone his skills and learn, Avinash is also enrolled in the
      Growth Strategies Program at IIM Kolkata. He has attended multiple start up cohort programs from Growth School,
      Xpert Chat and understands firsthand the mental challenges entrepreneurs have to go through on a day to day basis.
        He deeply believes in mental well being of entrepreneurs and hence co-created EntreJourn to help other
      entrepreneurs.`
    },
    {
      name: 'Bhanu Sehrawat',
      photo: 'assets/team/bhanu.jpeg',
      subtitle: 'Co-Creator & Strategist | Principal - Digital Media',
      description: `A Doctoral Candidate at the Indian Institute of Technology Madras, India, Bhanu is a Human Resources
      Professional with experience with not for profit organisations and corporates.  Her areas of interest include
        strategic inclusion at workplace and related issues pertaining to community, business and neurodiversity
      inclusion. With firsthand experience with aftermaths of mental health struggles, she is passionate about creating
      awareness and support systems for people grappling with mental health issues.
          She is a nerd at heart and has her priorities: Music, Comics, Bayern Munich and Food; in that order.`
    },
    {
      name: 'Rubina Pradhan',
      photo: 'assets/team/rubina.jpeg',
      subtitle: 'Co-Creator & Strategist | Principal - Website & Content',
      description: `Rubina holds postgraduate degrees in Forensic Mental Health Science from King’s College London and
      Clinical Psychology from the University of Calcutta. Having lived and worked in multiple cities and countries, she
      is currently in her hometown helping with the family business and other community related social ventures. When
      not busy she enjoys reading, listening to podcasts and music and going on treks and hikes.  A firm believer of the
      saying - “Once a year, go someplace".`
    }
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openTeamMemberModal(index: number) {
    const modalRef = this.modalService.open(TeamMemberComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.name = this.teamMembers[index].name;
    modalRef.componentInstance.photo = this.teamMembers[index].photo;
    modalRef.componentInstance.subtitle = this.teamMembers[index].subtitle;
    modalRef.componentInstance.description = this.teamMembers[index].description;
  }

  getStoryImages() {
    const images = [];
    const baseURL = 'assets/story/';
    for (let i = 1; i <= 6; i++) {
      images.push(baseURL + `${i}.jpg`);
    }

    return images;
  }
}
