import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Everyone tells me these are the best photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg';

  constructor() { }

  ngOnInit() {
  }

}