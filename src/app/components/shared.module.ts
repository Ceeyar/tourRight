import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from "@angular/material";

const modules = [MatCardModule, MatInputModule, MatButtonModule];

@NgModule({
  imports: [modules, CommonModule, ReactiveFormsModule],
  declarations: [],
  exports: [modules, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
