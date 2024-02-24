import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCommonHobbiesComponent } from './most-common-hobbies.component';

describe('MostCommonHobbiesComponent', () => {
  let component: MostCommonHobbiesComponent;
  let fixture: ComponentFixture<MostCommonHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostCommonHobbiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostCommonHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
