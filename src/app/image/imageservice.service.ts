import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { NgxGalleryImage} from 'ngx-gallery';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  private imageURL = 'http://127.0.0.1:80/image';

  constructor(
    private http: HttpClient) {}

    getImages (): Observable<NgxGalleryImage[]> {
      return this.http.get<NgxGalleryImage[]>(this.imageURL);
    }

}
