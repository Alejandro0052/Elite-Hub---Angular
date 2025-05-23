import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistasComponent } from './nutricionistas.component';

describe('NutricionistasComponent', () => {
  let component: NutricionistasComponent;
  let fixture: ComponentFixture<NutricionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutricionistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutricionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
