import { Component } from '@angular/core';
import { Employee } from "../models/employee";

@Component({
    selector: 'employees-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent {
    constructor() { }

    title: string = "Synechron Employees List";
    subTitle: string = "Core dev Team";
    selectedEmployee: Employee;

    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
        console.log("Im here"+emp.employeeId);
    }


    synechronEmployee: Employee[] = [
        {
            employeeId: 100,
            employeeName: "Datta",
            address: "Jadhavwadi",
            city: "pune",
            email: "dattaprasad@gmail.com",
            phone: 835848754,
            avatar: "images/noImage.png"
        },
        {
            employeeId: 200,
            employeeName: "Urma",
            address: "Wakad",
            city: "pune",
            email: "Urma@gmail.com",
            phone: 77878454,
            avatar: "images/noImage.png"
        },
        {
            employeeId: 300,
            employeeName: "Chetan",
            address: "DC",
            city: "pune",
            email: "Chetan@gmail.com",
            phone: 54845784,
            avatar: "images/noImage.png"
        }
    ]
}