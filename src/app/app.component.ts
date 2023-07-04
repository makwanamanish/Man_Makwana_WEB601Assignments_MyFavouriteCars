import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Man_Makwana_MyFavouriteCars';
  carId:number = 8;
  oneCarById: any = {};

  constructor(private CarService: CarService){}

  ngOnInit(){
    this.findCarById();
  }

  findCarById(){
    this.CarService.getCarById(this.carId).subscribe(result => {
      if (typeof result === "object"){
        this.oneCarById = result;
      }
    });
  }
}
