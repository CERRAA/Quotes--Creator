import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduceComponent } from './adduce.component';

describe('AdduceComponent', () => {
  let component: AdduceComponent;
  let fixture: ComponentFixture<AdduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
