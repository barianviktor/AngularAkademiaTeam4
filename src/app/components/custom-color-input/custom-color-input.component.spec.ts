import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColorInputComponent } from './custom-color-input.component';

describe('CustomColorInputComponent', () => {
  let component: CustomColorInputComponent;
  let fixture: ComponentFixture<CustomColorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomColorInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomColorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
