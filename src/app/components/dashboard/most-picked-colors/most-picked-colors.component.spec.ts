import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPickedColorsComponent } from './most-picked-colors.component';

describe('MostPickedColorsComponent', () => {
  let component: MostPickedColorsComponent;
  let fixture: ComponentFixture<MostPickedColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostPickedColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostPickedColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
