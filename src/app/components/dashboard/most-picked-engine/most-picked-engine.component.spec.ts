import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPickedEngineComponent } from './most-picked-engine.component';

describe('MostPickedEngineComponent', () => {
  let component: MostPickedEngineComponent;
  let fixture: ComponentFixture<MostPickedEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostPickedEngineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostPickedEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
