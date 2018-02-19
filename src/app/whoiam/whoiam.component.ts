import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoiam',
  templateUrl: './whoiam.component.html',
  styleUrls: ['./whoiam.component.css']
})
export class WhoiamComponent implements OnInit {
  imageUrl = '/assets/images/omurbek.gif';
  constructor() { }

  ngOnInit() {
  }

}
