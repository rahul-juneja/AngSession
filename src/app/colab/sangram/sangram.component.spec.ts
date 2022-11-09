import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangramComponent } from './sangram.component';

describe('SangramComponent', () => {
  let component: SangramComponent;
  let fixture: ComponentFixture<SangramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
