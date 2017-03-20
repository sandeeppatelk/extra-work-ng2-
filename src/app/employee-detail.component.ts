import{ Component } from '@angular/core';

@Component({

    selector:'employee-detail',
    template:`<h1>employee-detail</h1>
            <ul *ngFor="let employee of employees">
                <li>{{employee.id}}-{{employee.name}}-{{employee.gender}}</li>
            </ul>
    `


})

export class EmployeeDetail{

}