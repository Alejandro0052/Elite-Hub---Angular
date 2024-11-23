import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistasComponent } from './deportistas.component';

describe('DeportistasComponent', () => {
  let component: DeportistasComponent;
  let fixture: ComponentFixture<DeportistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeportistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
