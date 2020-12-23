import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamepageComponent } from './namepage.component';

describe('NamepageComponent', () => {
  let component: NamepageComponent;
  let fixture: ComponentFixture<NamepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
