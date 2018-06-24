import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  imageData = [
    {
      srcUrl: 'https://pixabay.com/get/e834b0072cf2063ecd0b4003e64d4094fe76e7d718b7134393f4c7_960.jpg',
      previewUrl: 'https://pixabay.com/get/e834b0072cf2063ecd0b4003e64d4094fe76e7d718b7134393f4c7_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb34b0062cf0063ecd0b4003e64d4094fe76e7d718b7134393f4c7_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb34b0062cf0063ecd0b4003e64d4094fe76e7d718b7134393f4c7_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/ec32b60e28f01c3e815f4305e74a448be272e0d41fb3134791f6_960.jpg',
      previewUrl: 'https://pixabay.com/get/ec32b60e28f01c3e815f4305e74a448be272e0d41fb3134791f6_960.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
