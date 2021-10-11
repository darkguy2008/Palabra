import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-selector',
  templateUrl: './room-selector.component.html',
  styleUrls: ['./room-selector.component.scss']
})
export class RoomSelectorComponent implements OnInit {

  isPrivate!: boolean;
  @Input() type!: string;
  @Input() name!: string;

  constructor() { }
  ngOnInit(): void {
    if (this.type == 'user' || this.type == 'watch') { this.isPrivate = true; }
  }

}
