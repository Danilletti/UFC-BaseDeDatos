import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterDetail } from './fighter-detail';

describe('FighterDetail', () => {
  let component: FighterDetail;
  let fixture: ComponentFixture<FighterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FighterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FighterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
