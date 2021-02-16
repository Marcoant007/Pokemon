import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsReadComponents implements OnInit {

  public allPokemons: any[];
  public filtredPokemons: any[];
  pokemon: any = {};
  pokemonName: string = '';
  id: number ;

  pokes: any = []

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.pokemon = {};
    this.activatedRoute.params.subscribe(async (params: Params) =>  {
      this.id = params.id;
      const data = await this.pokemonService.pokemonMoves(this.id);
      this.pokemon = data;
    });
    
    await this.loadPokemons();
  }

  async loadPokemons() {
    
    const data = await this.pokemonService.findAllPokemons();
    this.filtredPokemons = data.results;
    this.allPokemons = this.filtredPokemons;

    for await (const pokemon of this.filtredPokemons) {
      let result: any = await this.pokemonService.findPokemonByName(pokemon.name);
      pokemon.id = result.id;
    }
  }

  

  async filterPokemons(query: string) {
    this.filtredPokemons = this.allPokemons.filter(pokemon => {
      return pokemon.name.includes(query);
    });
  }

  clickPokemon(id: any) {
    this.router.navigate(["/pokemon/", id]);
  }

  buildUrlImage(id: number): string {
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return urlImage
  }
}