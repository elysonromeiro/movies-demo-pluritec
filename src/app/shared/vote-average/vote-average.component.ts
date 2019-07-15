import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vote-average',
  templateUrl: './vote-average.component.html',
  styleUrls: ['./vote-average.component.scss']
})
export class VoteAverageComponent implements OnInit {

  @Input() note: string;
  @Input() maxNote: string;

  constructor() { }

  ngOnInit() {
  }

}
