import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teams: any;
  players: any;
  campeonato: any;
  playersPage: number = 1;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.getBrasileirao()
    this.getTeams();
  }

  getBrasileirao() {
    this.apiService.getLeagues().subscribe({
      next: res => this.campeonato = res.response[4]
    })
  }

  getTeams() {
    this.apiService.getByLeague('teams', 140, 2022).subscribe({
      next: res => {
        this.teams = res.response
        console.log(this.teams)
      }
    })
  }

  openTeamDetails(index: number) {
    const id = this.teams[index].team.id
    this.router.navigate([`details/${id}`])
  }
}
