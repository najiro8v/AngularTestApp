import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ListWordVerbComponent } from "./listword-verb/listword-verb.component";
const routes:Routes=[
    {path:'verbs',
    component:ListWordVerbComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ListWordRoutingModule{};