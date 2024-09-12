import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTodoComponent } from './week-todo.component';

describe('WeekTodoComponent', () => {
  let component: WeekTodoComponent;
  let fixture: ComponentFixture<WeekTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekTodoComponent]
    });
    fixture = TestBed.createComponent(WeekTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
