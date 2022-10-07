import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationalFormComponent } from './creational-form.component';

describe('CreationalFormComponent', () => {
  let component: CreationalFormComponent;
  let fixture: ComponentFixture<CreationalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
