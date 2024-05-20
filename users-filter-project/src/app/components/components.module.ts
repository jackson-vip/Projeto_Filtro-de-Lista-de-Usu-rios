import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
  imports:[
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  exports:[
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ]
})

export class ComponentsModule {

}
