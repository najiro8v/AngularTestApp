import { Component, OnInit } from "@angular/core";
import { MenuItem } from 'primeng/api'
@Component({
    selector:"app-header",
    templateUrl:"./app-header.component.html",
    styleUrls:["app-header.componente.css"]
})

export class HeadComponent implements OnInit{
    items:MenuItem[];
    ngOnInit(): void {
        this.items=[
            label:'File',
            
        ]
    }
}