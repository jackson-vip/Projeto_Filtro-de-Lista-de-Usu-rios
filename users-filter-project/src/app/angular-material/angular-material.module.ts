import { NgModule } from "@angular/core"

// providers
import { provideNativeDateAdapter } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";

@NgModule ({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [provideNativeDateAdapter()],
})

export class AngularMaterialModule { }
