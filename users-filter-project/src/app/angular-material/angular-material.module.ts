import { NgModule } from "@angular/core"

// providers
import { provideNativeDateAdapter } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule ({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [provideNativeDateAdapter()],
})

export class AngularMaterialModule { }
