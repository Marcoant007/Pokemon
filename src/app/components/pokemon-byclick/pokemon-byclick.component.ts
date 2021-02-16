import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PokemonService } from '../positions/pokemon.service';

@Component({
  selector: 'app-pokemon-byclick',
  templateUrl: './pokemon-byclick.component.html',
  styleUrls: ['./pokemon-byclick.component.css']
})
export class PokemonByclickComponent implements OnInit {

  id: number = 0;
  pokemon: any = {};

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }


  async ngOnInit() { 
    this.pokemon = {};
    this.activatedRoute.params.subscribe(async (params: Params) =>  {
      this.id = params.id;
      const data = await this.pokemonService.findPokemonData(this.id);
      this.pokemon = data;
    });
  }


  buildUrlImage(id:number):string{
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return urlImage

  }


  async clickVoltar() {
    this.router.navigate(['/pokemons']) 
  }



}
