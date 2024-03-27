import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiterEntryComponent } from './visiter-entry.component';

describe('VisiterEntryComponent', () => {
  let component: VisiterEntryComponent;
  let fixture: ComponentFixture<VisiterEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiterEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
