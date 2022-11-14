import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidgirlComponent } from './kidgirl.component';

describe('KidgirlComponent', () => {
  let component: KidgirlComponent;
  let fixture: ComponentFixture<KidgirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidgirlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
