import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShibaniComponent } from './shibani.component';

describe('ShibaniComponent', () => {
  let component: ShibaniComponent;
  let fixture: ComponentFixture<ShibaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShibaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShibaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
