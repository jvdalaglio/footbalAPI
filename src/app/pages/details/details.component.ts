import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  teams: any;
  players: any;
  index: any;
  playersTeam: any;

  constructor(
    private apiService: ApiService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPlayersByTeam();
  }

  getPlayersByTeam() {
    let id = this.routes.snapshot.params['id']
    this.apiService.getByLeague('players' ,71, 2023, undefined, id).subscribe({
      next: res => {
        this.players = res.response[0].players
        this.playersTeam = res.response[0].team
        console.log(this.playersTeam)
      }
    })
  }

}
