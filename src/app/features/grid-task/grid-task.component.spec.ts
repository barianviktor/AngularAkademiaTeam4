import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTaskComponent } from './grid-task.component';

describe('GridTaskComponent', () => {
  let component: GridTaskComponent;
  let fixture: ComponentFixture<GridTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
