import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {

  imageUrl = '/assets/images/omurbek.jpg';
  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', './assets/particles.json', (data) => {
      console.log('callback - particles.js config loaded');
    });
  }

}
