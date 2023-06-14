import { NavbarService } from './../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navItems;
  public itemType;
  private open = false;
  constructor(private navServices: NavbarService) { }

  ngOnInit() {
    this.navItems = this.navServices.getItems();
  }

  onSelectItem(type) {
    this.itemType = type;
    this.open = !this.open;
  }

}
