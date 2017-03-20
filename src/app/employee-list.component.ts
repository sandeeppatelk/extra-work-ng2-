import{ Component } from '@angular/core';

@Component({

    selector:'employee-list',
    template:`<h1>employee-list</h1>
            <ul *ngFor="let employee of employees">
            <li>{{employee.name}}</li>
            </ul>
    `


})

export class EmployeeList{
        employee = [];

}