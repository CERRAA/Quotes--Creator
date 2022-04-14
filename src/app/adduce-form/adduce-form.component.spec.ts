import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduceFormComponent } from './adduce-form.component';

describe('AdduceFormComponent', () => {
  let component: AdduceFormComponent;
  let fixture: ComponentFixture<AdduceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
