import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedrajComponent } from './bedraj.component';

describe('BedrajComponent', () => {
  let component: BedrajComponent;
  let fixture: ComponentFixture<BedrajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedrajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedrajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
