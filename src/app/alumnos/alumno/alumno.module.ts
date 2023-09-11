import { NgModule } from "@angular/core";
import { AlumnoComponent } from "./alumno.component";
import { CommonModule } from "@angular/common";

@NgModule({
    exports:[  
        AlumnoComponent  
    ],
    declarations:[
        AlumnoComponent
    ],
    imports:[
        CommonModule
    ]
    
})
export class AlumnoModule{

}