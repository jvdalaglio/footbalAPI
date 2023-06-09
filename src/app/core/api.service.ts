import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://v3.football.api-sports.io'
  private apiKey = '075ebc7b473d2b03a316c5c5b4bb4f98'
  // private apiKey = '31666190df4f0dff36d9c5d298c3d6d1',
  // private apiKey = '1f51f9d6aa40446cf02a77e322d0b74d',
  // private apiKey = '2490bc9fafb1ea356c1a5f0f73d8897a'

  private headers: {} = {
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": this.apiKey
	  }
  }

  constructor(
    private http: HttpClient
  ) { }

  getLeagues(country: string, season: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/leagues?country=${country}&season=${season}`, this.headers )
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}/countries`, this.headers)
  }

  getByLeague(type?: string, leagueId?: number, leagueSeason?: number, page?:number, team?: number): Observable<any> {
    if(team) {
      return this.http.get(`${this.apiUrl}/${type}/squads?team=${team}`, this.headers )
    }
    if(page) {
      return this.http.get(`${this.apiUrl}/${type}?league=${leagueId}&season=${leagueSeason}&page=${page}`, this.headers )
    }
    return this.http.get(`${this.apiUrl}/${type}?league=${leagueId}&season=${leagueSeason}`, this.headers )
  }
}
