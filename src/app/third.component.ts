import {Component} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {EmployeeService } from './employee.service';

@Component({
    selector:'third-component',
    templateUrl: `app/model.form.html`,
    styles:[`input.ng-invalid{border-left: 5px solid red; }
            input.ng-valid{border-left: 5px solid green; }
    
    `],
    providers:[EmployeeService]
})

export class ThirdComponent{
    userForm = new FormGroup({
        name : new FormControl(),
        email: new FormControl(),
        address:new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl()
        })
    });
     
onSubmit(value:any){
    console.log(value);
}
}