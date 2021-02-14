import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonByclickComponent } from './components/pokemon-byclick/pokemon-byclick.component';
import { PokemonsReadComponents } from './components/positions/pokemons-list/pokemons-list.component';

import { PositionsCreateComponent } from './components/positions/positions-create/positions-create.component';



import { HomeComponent } from './views/home/home.component';

import { PositionCrudComponent } from './views/position-crud/position-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},

{
  path: "position",
  component: PositionsCreateComponent
},
{
  path: "position/:id",
  component: PositionsCreateComponent
},
  
{
  path: "pokemons",
  component: PositionCrudComponent
},
{
  path: "pokemons/:id",
  component: PokemonByclickComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
