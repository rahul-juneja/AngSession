import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibyaComponent } from './dibya.component';

describe('DibyaComponent', () => {
  let component: DibyaComponent;
  let fixture: ComponentFixture<DibyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DibyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DibyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
