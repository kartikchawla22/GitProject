import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitinfoComponent } from './gitinfo.component';

describe('GitinfoComponent', () => {
  let component: GitinfoComponent;
  let fixture: ComponentFixture<GitinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
