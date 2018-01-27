import { Component, OnInit } from '@angular/core';
import {ParticipantService} from '../shared/participant/participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  participants: Array<any>;
  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.participantService.getAll().subscribe(data => {
      this.participants = data;
    });
  }
}
