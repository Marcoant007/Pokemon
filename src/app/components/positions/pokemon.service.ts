import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    baseUrl= "https://pokeapi.co/api/v2/pokemon?limit=151"

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    public async findAllPokemons(): Promise<any>{
        return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=156').toPromise()
    }

    public async findPokemonData(id:number){
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise()
    }

    public async findPokemonByName(name: string) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).toPromise();
    }

    public async pokemonMoves(id:number){
        return this.http.get(`move:"https://pokeapi.co/api/v2/move/${id}"`).toPromise()
    }

}
