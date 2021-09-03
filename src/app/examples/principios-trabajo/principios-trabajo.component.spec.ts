import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosTrabajoComponent } from './principios-trabajo.component';

describe('PrincipiosTrabajoComponent', () => {
  let component: PrincipiosTrabajoComponent;
  let fixture: ComponentFixture<PrincipiosTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipiosTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipiosTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
