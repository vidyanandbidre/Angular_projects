import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConterComponent } from './conter.component';

describe('ConterComponent', () => {
  let component: ConterComponent;
  let fixture: ComponentFixture<ConterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
