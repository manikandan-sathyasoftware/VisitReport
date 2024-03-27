import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDirectoryComponent } from './visitor-directory.component';

describe('VisitorDirectoryComponent', () => {
  let component: VisitorDirectoryComponent;
  let fixture: ComponentFixture<VisitorDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
