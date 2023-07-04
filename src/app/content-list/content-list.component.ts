import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  searchTitle: string = '';
  searchResult: boolean = false; 
  searchMessage: string = '';

  contents: any[] = [
    { id: 1, 
      title: 'Mercedes-Benz G-Class', 
      description: 'The Mercedes-Benz G-Class, sometimes colloquially called the G-Wagen (as an abbreviation of Geländewagen) is a four-wheel drive automobile manufactured by Magna Steyr (formerly Steyr-Daimler-Puch) in Austria and sold by Mercedes-Benz.', 
      creator: 'Created by austria country', image: 'https://maxtuncars.com/storage/11-1.jpg',
      tags: ['AustrianCar', 'TopMostCar'] 
    },
    { id: 2, 
      title: 'DODGE', 
      description: 'Dodge is an American brand of automobiles and a division of Stellantis North America, based in Auburn Hills, Michigan. Dodge vehicles have historically included performance cars, and for much of its existence Dodge was Chryslers mid-priced brand above Plymouth.', 
      creator: 'Created by american automobiles', 
      image: 'https://www.topgear.com/sites/default/files/news-listicle/image/dg018_130clgtqm46n89ljrl6nug4ebog7a2r.jpg', 
      type: 'American', 
      tags: ['AmericanCar', 'Dodge'] 
    },
    { id: 3, 
      title: 'SUBARU', 
      description: 'Subaru only operates two automobile manufacturing facilities — one in Japan and one the U.S. It makes almost all of its cars in Japan and has many suppliers located in its home country', 
      creator: 'Created by japanese company', 
      image: 'https://i.pinimg.com/originals/3c/87/aa/3c87aa65361b1d7643af10c194f7893e.jpg', 
      type: 'Japanese', 
      tags: ['JapaneseCar', 'Subaru'] }
  ];

  searchByTitle() {
    this.searchResult = this.contents.some(content => content.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.searchMessage = this.searchResult
      ? `Content with title "${this.searchTitle}" exists.`
      : `Content with title "${this.searchTitle}" doesn't exist.`;
  }
  displayDetails(content: any) {
    console.log('ID:', content.id);
    console.log('Title:', content.title);
  }

}