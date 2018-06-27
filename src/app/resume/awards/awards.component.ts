import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  imageData = [
    {
      srcUrl: '/assets/images/saktan.jpeg',
      previewUrl: '/assets/images/saktan.jpeg'
    },
    {
      srcUrl: '/assets/images/front-end-certificate.jpg',
      previewUrl: '/assets/images/front-end-certificate.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
