import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLacteosComponent } from './memory_lacteos.component';

describe('MemoryLacteosComponen', () => {
  let component: MemoryLacteosComponent;
  let fixture: ComponentFixture<MemoryLacteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryLacteosComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryLacteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
