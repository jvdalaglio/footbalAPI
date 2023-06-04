import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teams: any;
  players: any;
  campeonato: any;
  playersPage: number = 1;
  leagues: any;
  selectedLeague: any;
  selectedCountry: any;
  selectedSeason: any;
  countries: any;
  seasons: number[] = [2023, 2022, 2021, 2020, 2019, 2018]

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getTeams() {
    this.apiService.getByLeague('teams', this.selectedLeague, 2023).subscribe({
      next: res => {
        this.teams = res.response
        if(this.teams.length == 0) {
          alert('Não há times cadastrados para este campeonato')
        }
      }
    })
  }

  getCountries() {
    this.apiService.getCountries().subscribe({
      next: (res: any) => {
        this.countries = res.response
        console.log(this.countries)
      }
    })
  }

  getModel() {
    console.log(this.selectedLeague)
  }

  getLeagues() {
    this.apiService.getLeagues(this.selectedCountry, this.selectedSeason).subscribe({
      next: res => {
        this.leagues = res.response
      }
    })
  }

  openTeamDetails(index: number) {
    const id = this.teams[index].team.id
    this.router.navigate([`details/${id}`])
  }

  refresh() {
    this.selectedCountry = undefined;
    this.selectedLeague = undefined;
    this.selectedSeason = undefined;
    this.getTeams();
  }

  isSelected() {
    if(this.selectedCountry && this.selectedSeason) {
      this.getLeagues();
    }
  }
}
