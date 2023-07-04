import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Content[]>
  {
    const cars = contents;
    return of(cars);
  }

  getCarById(id: number): Observable<any> {
    const car = contents.find(content => content.id === id);

    if (car) {
      return of(car);
    }
    return of("Invalid Id");
  }
}
