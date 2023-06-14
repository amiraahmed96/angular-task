import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  items = {
    'men': ['clothign', 'shoes'],
    'wemen': ['clothign', 'shoes', 'accessories']
  };

  constructor() { }

  getItems() {
    return this.items;
  }
}
