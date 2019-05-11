import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize, NgxGalleryOrder } from 'ngx-gallery';

import { interval} from 'rxjs';
import { ImageserviceService } from './image/imageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  
  constructor(private imageService: ImageserviceService) { }

  ngOnInit(): void {

      this.getImages();

      // interval(5000).subscribe( () =>
      //   this.getImages()
        
      //   );
  }

  getImages(): void {
    console.log("now");
    this.imageService.getImages();}
  //   .subscribe(
  //     images => this.galleryImages = images);
  // }

}

