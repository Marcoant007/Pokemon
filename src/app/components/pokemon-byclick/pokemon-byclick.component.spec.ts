import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonByclickComponent } from './pokemon-byclick.component';

describe('PokemonByclickComponent', () => {
  let component: PokemonByclickComponent;
  let fixture: ComponentFixture<PokemonByclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonByclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonByclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
