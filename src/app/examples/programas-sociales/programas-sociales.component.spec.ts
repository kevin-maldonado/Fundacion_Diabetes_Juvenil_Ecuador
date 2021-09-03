import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasSocialesComponent } from './programas-sociales.component';

describe('ProgramasSocialesComponent', () => {
  let component: ProgramasSocialesComponent;
  let fixture: ComponentFixture<ProgramasSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramasSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
