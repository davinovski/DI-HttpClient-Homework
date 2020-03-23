import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexElementsComponent } from './index-elements.component';

describe('IndexElementsComponent', () => {
  let component: IndexElementsComponent;
  let fixture: ComponentFixture<IndexElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
