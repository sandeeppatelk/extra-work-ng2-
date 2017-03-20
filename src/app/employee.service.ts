import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    getEmployees(){
            return [
            {"id":1,"name":"sandeep","gender":"male"},
            {"id":2,"name":"purvesh","gender":"male"},
            {"id":3,"name":"aakash","gender":"male"},
            {"id":4,"name":"jimit","gender":"male"}
        ]
    }
}