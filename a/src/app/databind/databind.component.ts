import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  dynName:string = "Shaik";
  fName:string="Akram";
  lName:string="Hussain";
  text:string;
  student: string[]=['a','b','c','d'];
  enable:boolean =false;

  appStatus:boolean=false;
  status1="online";
  status2="offline";

  fcs(){
    this.text="u r inside the box";
    console.log("you are inside the box");
  }
  blr(){
    this.text=" u r out of the box";
    console.log("you are outside the box");
  }
  marks:number[]=[45,99,11,89,22];
  usermarks=[
    {city:'Hyd',marks:'50'},
    {city:'Mumbai',marks:'60'},
    {city:'Chennai',marks:'70'}
  ]

  arrobj=[{
    "name":'aaa',
    "id":101,
  },
  {
    "name":'bbb',
    "id":202
  },
    {
      "name":'ccc',
      "id":303
    }
  ]
}
