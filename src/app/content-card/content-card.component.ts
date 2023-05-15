import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    
    this.contentList.add({
      id: 1,
      title: "Mercedes-Benz G-Class",
      description: "The Mercedes-Benz G-Class, sometimes colloquially called the G-Wagen (as an abbreviation of Geländewagen) is a four-wheel drive automobile manufactured by Magna Steyr (formerly Steyr-Daimler-Puch) in Austria and sold by Mercedes-Benz.",
      creator: "Created by austria country",
      imgURL: "https://maxtuncars.com/storage/11-1.jpg",
      type: "Austrian car"
      
    });

    this.contentList.add({
      id: 2,
      title: "DODGE",
      description: "Dodge is an American brand of automobiles and a division of Stellantis North America, based in Auburn Hills, Michigan. Dodge vehicles have historically included performance cars, and for much of its existence Dodge was Chrysler's mid-priced brand above Plymouth..",
      creator: "Created by american automobiles",
      imgURL: "https://www.topgear.com/sites/default/files/news-listicle/image/dg018_130clgtqm46n89ljrl6nug4ebog7a2r.jpg",
      type:  "American car"
    });

    this.contentList.add({
      id: 3,
      title: "SUBARU",
      description: "As you can see, Subaru only operates two automobile manufacturing facilities — one in Japan and one the U.S. It makes almost all of its cars in Japan and has many suppliers located in its home country as well..",
      creator: "Created by japanese company",
      imgURL: "https://i.pinimg.com/originals/3c/87/aa/3c87aa65361b1d7643af10c194f7893e.jpg",
      type: "Japanese car"
    });
  }
}