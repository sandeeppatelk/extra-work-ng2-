import { Component } from '@angular/core';

@Component({
    selector:'first-component',
    template:` <h1>First Component</h1>
        <h2>parent component</h2>
        <label>Enter Parent Component Value </label>
        <input type="text" #ptext (keyup)="0">
        <p> value from child component is  {{childData}}</p>

        <second-component (childEvent)="childData=$event" [parentData] = "ptext.value"></second-component>`,
       
        inputs:[ 'SecondComponent' ],

    styles: []
})

export class FirstComponent{

public childData:String;
}



