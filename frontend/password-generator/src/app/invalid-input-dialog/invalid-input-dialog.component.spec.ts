import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidInputDialogComponent } from './invalid-input-dialog.component';

describe('InvalidInputDialogComponent', () => {
  let component: InvalidInputDialogComponent;
  let fixture: ComponentFixture<InvalidInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidInputDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvalidInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
