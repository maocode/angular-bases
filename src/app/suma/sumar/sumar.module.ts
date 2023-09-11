import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumarComponent } from './sumar.component';



@NgModule({
  declarations: [
    SumarComponent
  ],
  exports: [
    SumarComponent
  ],
  imports:[
    CommonModule
]
})
export class SumarModule { }
