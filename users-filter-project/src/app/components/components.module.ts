import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations:[
    UserDetailsComponent,
    UsersListComponent,
    FilterComponent,
  ],
  imports:[
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    UserDetailsComponent,
    UsersListComponent,
    FilterComponent,
  ]
})

export class ComponentsModule {

}
