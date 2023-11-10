import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DropdownComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    DropdownComponent,
  ]
})
export class SharedModule { }
