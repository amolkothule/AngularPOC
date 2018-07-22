
import { Component, Input } from '@angular/core';

import { EmployeesListComponent } from "../components/employees-list.component";
import { Employee } from "../models/employee";

@Component({
    selector: 'employee-details',
    templateUrl: '../views/employee-details.component.html'
})

export class EmployeeDetailsComponent {
    constructor() { }
    title: string = "Details of Employee ";
    @Input() employee: Employee;
}