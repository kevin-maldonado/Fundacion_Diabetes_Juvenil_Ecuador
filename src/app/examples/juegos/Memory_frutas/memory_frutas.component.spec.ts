import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryfrutasComponent } from './memory_frutas.component';

describe('MemoryfrutasComponen', () => {
  let component: MemoryfrutasComponent;
  let fixture: ComponentFixture<MemoryfrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryfrutasComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryfrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
