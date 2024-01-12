import { Component, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { InvalidInputDialogComponent } from '../invalid-input-dialog/invalid-input-dialog.component';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InvalidInputDialogComponent,
  ],
})
@Injectable()
export class NumberInputComponent {
  numberInput: number = 1;
  passwords: string[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  validateNumber() {
    if (
      this.numberInput < 1 ||
      this.numberInput > 10 ||
      !Number.isInteger(this.numberInput)
    ) {
      this.numberInput = 1;
      this.openInvalidInputDialog();
    }
  }

  openInvalidInputDialog() {
    this.dialog.open(InvalidInputDialogComponent);
  }

  getPasswords() {
    this.http
      .get<string[]>(
        `http://localhost:8080/api/passwords?count=${this.numberInput}`
      )
      .subscribe(
        (data) => {
          this.passwords = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
  }
}
