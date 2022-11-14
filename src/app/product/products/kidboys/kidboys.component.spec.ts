import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidboysComponent } from './kidboys.component';

describe('KidboysComponent', () => {
  let component: KidboysComponent;
  let fixture: ComponentFixture<KidboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidboysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
