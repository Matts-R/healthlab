import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuperfilComponent } from './meuperfil.component';

describe('MeuperfilComponent', () => {
  let component: MeuperfilComponent;
  let fixture: ComponentFixture<MeuperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


