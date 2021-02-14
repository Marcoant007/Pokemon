import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsReadComponents implements OnInit {

  public pokemons: any[];

  constructor(
    private pokemonService: PokemonService,
    private router : Router) {

     }

  async ngOnInit() {
   await this.loadPokemons();
  }

 async  loadPokemons() {
    const data = await this.pokemonService.findAllPokemons();
    this.pokemons = data.results
    
  }

  async clickPokemons(id:number){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return url
  }

  buildUrlImage(id:number):string{
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return urlImage

  }


}
