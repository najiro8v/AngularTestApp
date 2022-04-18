import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { ListWordVerbComponent } from "./listword-verb/listword-verb.component";
import { ListWordRoutingModule } from "./listword-routing.module";
@NgModule({
    imports:[
        CommonModule,
        ListWordRoutingModule 
        ],
    declarations:[
        ListWordVerbComponent
    ],
    providers:[],
})

export class ListWordModule{};