import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize, NgxGalleryOrder } from 'ngx-gallery';

import { interval} from 'rxjs';
import { ImageserviceService } from './image/imageservice.service';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryOptionsRight: NgxGalleryOptions[];
  galleryImagesRight: NgxGalleryImage[];
  updateIntervalDuration: number = 1000 * 10;
  imageDisplayDuration: number = 1000 * 2;
  currentIndex: number = 0;

  
  constructor(private imageService: ImageserviceService) { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 3,
          thumbnailsRows: 2,
          thumbnailsOrder: NgxGalleryOrder.Row,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          imageAutoPlayInterval: this.imageDisplayDuration,
      },
    ]
    this.galleryOptionsRight = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 3,
          thumbnailsRows: 2,
          thumbnailsOrder: NgxGalleryOrder.Row,
          layout: NgxGalleryLayout.ThumbnailsTop,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          imageAutoPlayInterval: this.imageDisplayDuration,
      },
    ]

    this.imageService.getImages()
    .subscribe(
      images => this.galleryImages = images);

      
    this.imageService.getLatestImages(5)
    .subscribe(
      images => this.galleryImagesRight = images);

    interval(this.updateIntervalDuration).subscribe( () => {
        this.getImages();
        this.getLatestImages();
      }
      );
  }

  getImages(){
    this.currentIndex = (this.updateIntervalDuration / this.imageDisplayDuration + this.currentIndex) % this.galleryImages.length;
    console.log(this.currentIndex);

    this.imageService.getImages()
    .subscribe(
      images => {
        this.galleryImages= images;
        
        this.galleryOptions = [
          {
              width: '600px',
              height: '400px',
              thumbnailsColumns: 3,
              thumbnailsRows: 2,
              thumbnailsOrder: NgxGalleryOrder.Row,
              imageAnimation: NgxGalleryAnimation.Slide,
              imageAutoPlay: true,
              imageAutoPlayInterval: this.imageDisplayDuration,
              startIndex: this.currentIndex,
          },
        ]
      }
      );
  }

  getLatestImages(){
    this.currentIndex = (this.updateIntervalDuration / this.imageDisplayDuration + this.currentIndex) % this.galleryImages.length;
    console.log("right :"+this.currentIndex);

    this.imageService.getLatestImages(5)
    .subscribe(
      images => {
        this.galleryImagesRight = images;
        
        this.galleryOptionsRight = [
          {
              width: '600px',
              height: '400px',
              thumbnailsColumns: 3,
              thumbnailsRows: 2,
              thumbnailsOrder: NgxGalleryOrder.Row,
              imageAnimation: NgxGalleryAnimation.Slide,
              imageAutoPlay: true,
              imageAutoPlayInterval: this.imageDisplayDuration,
              startIndex: this.currentIndex,
          },
        ]
      }
      );
  }

}

