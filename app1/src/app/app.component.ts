import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  add=0;
  subtract=0;
  multiply=0;
  res=0;
  re:any;
  op:any = null;
  getAddition(num1:string,num2:string){
    this.res=Number(num1) + Number(num2);
    this.op = "addition"
    this.re=`<h1> ${this.op} of ${num1} and ${num2} is ${this.res}</h1>`
  }
  getSub(num1:string,num2:string){
    this.res=Number(num1) -Number(num2);
    this.op = "Multiplication"
    this.re=`<h1> ${this.op} of ${num1} and ${num2} is ${this.res}</h1>`
  }
  getMul(num1:string,num2:string){
    this.res=Number(num1) * Number(num2);
    this.op = "Multiplication"
    this.re=`<h1> ${this.op} of ${num1} and ${num2} is ${this.res}</h1>`
  }
}
