import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCardComponent } from './tags-card.component';

describe('TagsCardComponent', () => {
  let component: TagsCardComponent;
  let fixture: ComponentFixture<TagsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
