import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() name!: string;
  @Input() photo!: string;
  @Input() subtitle!: string;
  @Input() description!: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
