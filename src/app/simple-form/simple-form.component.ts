import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  text1:string = "0";
  text2:string = "0";
  result:string ="足し算しましょう";
  constructor() { }

  ngOnInit(): void {
  }

  addAndShow(): void{
    this.result = this.text1;
  }

}
