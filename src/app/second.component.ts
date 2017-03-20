import { Component } from '@angular/core';
import {EventEmitter} from '@angular/core';// event emit karva mate 
@Component({
    selector: 'second-component',
    template :`<h1>Second component</h1>
            <h2>child compoent</h2>
            <label>enter chile component value</label>
            <input type="text" #childtext   (keyup) = "onChange(childtext.value)">
            
            //reference aapi event pass kari che
            
            <p> value from parent controller  {{parentData}} </p>//parent ma thi value get kari
            <hr/>
            <h3>Pipes</h3>
            
            <h4>{{name | uppercase}}</h4> uppercase Pipes
            <h4>{{name | lowercase}}</h4> lowecase Pipes
            <h4>{{name | slice:'2':'6'}}</h4> slice pipe used
            <h4>{{8.567 | number:'1.2-3'}}</h4>
            <h4>{{8.567 | number:'3.2-3'}}</h4>
            <h4>{{8.567 | number:'1.5-7'}}</h4>
            <h4>{{8.567 | currency: 'USD' }}</h4>
            <h4>{{8.567 | currency: 'USD':true }}</h4>
            <h4>{{date}}</h4>
            <h4>{{date | date:'fullDate'}}</h4>
            <h4>{{date | date:'shortDate'}}</h4>
            <h4>{{date | date:'shortTime'}}</h4>

            
    `,
    inputs: ['parentData'], // input je levanu hoy ee ahi link karva nu
    outputs:['childEvent'] // output je aapva nu hoy ee
})

export class SecondComponent{
date=new Date();
name='sandeep';
public parentData:String;
childEvent = new EventEmitter<string>();
onChange(value:string){
    this.childEvent.emit(value);
}

}
