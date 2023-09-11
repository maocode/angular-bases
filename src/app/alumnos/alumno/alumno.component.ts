import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno.component.html',
  styles: [
  ]
})
export class AlumnoComponent {
public name:string='Mauricio';
public lastname:string='Calderon Rivera';
public curse:number=11;
public salon:string='11 A';
public asisten:number=0;
public salones:string[]= ['SEPTIMO A','SEPTIMO B','OCTAVO A','OCTAVO B'];
/* method of class */
changeCurse=()=>{
  this.curse=10;

}
changeSalon=()=>{
  this.salon='11 C';
}
aumentarCapacidad=()=>{
  this.asisten+=1;
}
disminuirCapacidad=()=>{
  this.asisten-=1;
}





}
