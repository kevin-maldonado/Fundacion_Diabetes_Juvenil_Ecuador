import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCerealesComponent } from './memory_cereales.component';

describe('MemoryCerealesComponent', () => {
  let component: MemoryCerealesComponent;
  let fixture: ComponentFixture<MemoryCerealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryCerealesComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryCerealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
