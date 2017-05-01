import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchallprojectsComponent } from './searchallprojects.component';

describe('SearchallprojectsComponent', () => {
  let component: SearchallprojectsComponent;
  let fixture: ComponentFixture<SearchallprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchallprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchallprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
