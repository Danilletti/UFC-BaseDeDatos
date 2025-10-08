import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fighters } from './fighters';

describe('Fighters', () => {
  let component: Fighters;
  let fixture: ComponentFixture<Fighters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fighters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fighters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
