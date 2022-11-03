import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangeetaComponent } from './sangeeta.component';

describe('SangeetaComponent', () => {
  let component: SangeetaComponent;
  let fixture: ComponentFixture<SangeetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangeetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangeetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
