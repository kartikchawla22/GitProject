import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmongoComponent } from './postmongo.component';

describe('PostmongoComponent', () => {
  let component: PostmongoComponent;
  let fixture: ComponentFixture<PostmongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
