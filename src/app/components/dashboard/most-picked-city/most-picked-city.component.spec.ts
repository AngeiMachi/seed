import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPickedCityComponent } from './most-picked-city.component';

describe('MostPickedCityComponent', () => {
  let component: MostPickedCityComponent;
  let fixture: ComponentFixture<MostPickedCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostPickedCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostPickedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
