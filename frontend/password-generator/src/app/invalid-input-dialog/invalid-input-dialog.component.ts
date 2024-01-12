import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-invalid-input-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './invalid-input-dialog.component.html',
  styleUrl: './invalid-input-dialog.component.scss',
})
export class InvalidInputDialogComponent {}
