import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipoComponent } from './hipo.component';

describe('HipoComponent', () => {
  let component: HipoComponent;
  let fixture: ComponentFixture<HipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
