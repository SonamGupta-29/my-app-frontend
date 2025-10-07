import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
isLoading = signal(false);

  constructor() { }

  show() {
     this.isLoading.set(true); // update state
    }


  hide() {
     this.isLoading.set(false); // update state
    }
}
