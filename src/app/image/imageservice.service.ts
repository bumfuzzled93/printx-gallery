import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { NgxGalleryImage} from 'ngx-gallery';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  private imageURL = 'http://localhost:8080/image';
  private latesImageURL = 'http://localhost:8080/latestImage';

  constructor(
    private http: HttpClient) {}

    getImages (): Observable<NgxGalleryImage[]> {
      return this.http.get<NgxGalleryImage[]>(this.imageURL);
    }
    
    getLatestImages (num : Number): Observable<NgxGalleryImage[]> {
      console.log("Getting " + this.latesImageURL + "?num=" + num);
      return this.http.get<NgxGalleryImage[]>(this.latesImageURL + "?num=" + num);
    }

}
