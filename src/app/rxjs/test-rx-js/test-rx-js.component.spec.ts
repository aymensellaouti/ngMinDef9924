import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxJsComponent } from './test-rx-js.component';

describe('TestRxJsComponent', () => {
  let component: TestRxJsComponent;
  let fixture: ComponentFixture<TestRxJsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRxJsComponent]
    });
    fixture = TestBed.createComponent(TestRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
