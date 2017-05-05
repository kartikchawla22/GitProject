import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmongoComponent } from './searchmongo.component';

describe('SearchmongoComponent', () => {
  let component: SearchmongoComponent;
  let fixture: ComponentFixture<SearchmongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
