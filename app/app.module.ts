import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employees-details.components";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeesListComponent, EmployeeDetailsComponent],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {


}
