import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikuComponent } from './chiku.component';

describe('ChikuComponent', () => {
  let component: ChikuComponent;
  let fixture: ComponentFixture<ChikuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChikuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
