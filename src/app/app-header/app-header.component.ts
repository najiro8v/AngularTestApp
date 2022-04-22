import { Component, OnInit } from "@angular/core";
import { MenuItem } from 'primeng/api'
import { Router } from "@angular/router";
@Component({
    selector:"app-header",
    templateUrl:"./app-header.component.html",
})

export class HeadComponent implements OnInit{
    constructor(private router:Router){

    }
    items:MenuItem[];
    ngOnInit(): void {
        this.items=[
            {
                label:'Home',
                icon: 'pi pi-fw pi-home',
                command: (event) => {
                this.router.navigate(["/"])
                }
            }
            ,
            {   
                label:'List',
                icon:'pi pi-fw pi-list',
                items:[
                    {label:"Verbs",
                    icon:"pi pi-fw pi-book",
                    command: (event) => {
                        this.router.navigate(["/list/verbs"])
                        }
                    }
                
                ]
            }
        ]
    }
}