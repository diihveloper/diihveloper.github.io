import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  age = 0;
  work = 0;

  constructor() {
    this.age = Math.floor((Date.now() - 659412e6) / 315576e5);
    this.work = Math.round((Date.now() - 1357524e6) / 315576e5);
  }

  ngOnInit(): void {
  }

}
