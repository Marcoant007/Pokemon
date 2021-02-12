import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsReadComponents } from './pokemons-list.component';

describe('PokemonsReadComponents', () => {
  let component: PokemonsReadComponents;
  let fixture: ComponentFixture<PokemonsReadComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsReadComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsReadComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
