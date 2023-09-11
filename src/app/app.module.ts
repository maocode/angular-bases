import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoModule } from './alumnos/alumno/alumno.module';
import { SumarModule } from './suma/sumar/sumar.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,AlumnoModule,SumarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
