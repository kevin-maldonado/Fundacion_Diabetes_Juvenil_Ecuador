import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoAmigoComponent } from './campo-amigo.component';

describe('CampoAmigoComponent', () => {
  let component: CampoAmigoComponent;
  let fixture: ComponentFixture<CampoAmigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoAmigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
