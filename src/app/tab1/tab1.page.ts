import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  ngOnInit() {

    let numero = 1;
    debugger;
    numero = 20;
    numero = numero * 10;

    console.log('helloword');

  }

  constructor() {}

}
