import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TeamsTableComponent {

  @Input() teams: any;
  @Output() teamEvent = new EventEmitter()

  getPlayersByTeam(index:number) {
    this.teamEvent.emit(index)
  }
}
