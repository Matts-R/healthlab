import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeituraPageComponent } from './leitura-page.component';

describe('LeituraPageComponent', () => {
  let component: LeituraPageComponent;
  let fixture: ComponentFixture<LeituraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeituraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeituraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
