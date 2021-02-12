import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Positions } from '../position.model';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsReadComponents implements OnInit {

  public positions: Positions[];
  public positionString: any[];
  public pokemons: any[];

  constructor(
    private positionService : PositionService,
    private router : Router) {

     }

  async ngOnInit() {
   await this.loadPositions();
   await this.loadPokemons();
  }

 async  loadPokemons() {
    const data = await this.positionService.findAllPokemons();
    this.pokemons = data.results
  }

  buildUrlImage(id:number):string{
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return urlImage

  }

  public async loadPositions(){
        this.positions = await this.positionService.listPosition()
  }

  async deletePosition(id: any){
    await this.positionService.deletePosition(id)
    location.reload()
  }

  async navigateToUpdate(positions: Positions){
    this.router.navigate(['/position', positions.id])
  }
}
