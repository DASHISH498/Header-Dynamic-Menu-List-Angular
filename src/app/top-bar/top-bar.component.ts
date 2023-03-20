import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  colorDetails = [
    {
      color: 'Home',
      href: 'https://dashishsoni.in/',
    },
    {
      color: 'About',
    },
    {
      color: 'Porfolio',
    },
    {
      color: 'Gallery',
    },
    {
      color: 'Contact',
    },
  ];

  headerUrl(url: any) {
    window.open(url, '_blank');
  }
}
