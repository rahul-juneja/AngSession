import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeetingComponent } from './settings.component';

describe('SeetingComponent', () => {
  let component: SeetingComponent;
  let fixture: ComponentFixture<SeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
