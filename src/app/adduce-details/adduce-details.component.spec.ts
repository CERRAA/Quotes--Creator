import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduceDetailsComponent } from './adduce-details.component';

describe('AdduceDetailsComponent', () => {
  let component: AdduceDetailsComponent;
  let fixture: ComponentFixture<AdduceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
