import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoPostComponent } from './criacao-post.component';

describe('CriacaoPostComponent', () => {
  let component: CriacaoPostComponent;
  let fixture: ComponentFixture<CriacaoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
