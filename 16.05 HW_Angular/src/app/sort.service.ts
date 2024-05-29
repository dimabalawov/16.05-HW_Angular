import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private digits:number[] = [1,6,3,2,7,0,5,4,9,11,22,51];


  getArray() {
    return this.digits;
  }

  sortDescending(array:number[]) {
    return array.sort((a, b) => a - b);
  }

  sortAscending(array:number[]) {
    return array.sort((a, b) => b - a);
  }

  findMax(array:number[]) {
    return Math.max(...array);
  }
  constructor() { }
}
