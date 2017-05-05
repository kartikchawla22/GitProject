import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoregexComponent } from './mongoregex.component';

describe('MongoregexComponent', () => {
  let component: MongoregexComponent;
  let fixture: ComponentFixture<MongoregexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoregexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoregexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
