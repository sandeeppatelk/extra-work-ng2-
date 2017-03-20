import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

export class AppComponent {
        public applyclass=true;
        public applyblue=true;
        onclick(value){
            console.log(value);
            
        }
        sandeep(){
            alert("mouseover event");
        }
        
        public firstname;
        public lastname;
        public showelemt=true;
        public switchcolor='red';
        public colors=['red','blue','black'];
        public cone= true;
        public ctwo= true;
        toggle(){
            this.cone=!this.cone;
            this.ctwo=!this.ctwo;
        }
        public style='italic';
        public size: '30px';
}






