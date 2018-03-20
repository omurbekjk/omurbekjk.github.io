import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-whoiam',
  templateUrl: './whoiam.component.html',
  styleUrls: ['./whoiam.component.css']
})
export class WhoiamComponent implements OnInit {
  imageUrl = '/assets/images/omurbek.jpg';
  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', './assets/particles.json', (data) => {
      console.log('callback - particles.js config loaded');
    });
  }

}
