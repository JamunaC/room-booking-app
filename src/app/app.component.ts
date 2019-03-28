import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'room-booking-app';
  numberOfRooms: number = 1;
  numberOfAdults: number = 1;
  numberOfChildren: number = 0;

  decreaseRooms() {
    if (this.numberOfRooms > 1) {
      this.numberOfRooms = this.numberOfRooms - 1;
      let sumOfPeople = this.numberOfAdults + this.numberOfChildren;
      let maxNumPleople = 4 * this.numberOfRooms;
      if(this.numberOfAdults > maxNumPleople) {
        this.numberOfAdults = maxNumPleople;
        if(this.numberOfAdults > 0) {
          this.numberOfChildren = 0;
        }
      }
      else if(this.numberOfAdults == maxNumPleople) {
        this.numberOfChildren = 0;
      }
      else if(this.numberOfAdults < maxNumPleople) {
        if(this.numberOfChildren > (3*this.numberOfRooms)){
          this.numberOfChildren =  ((3*this.numberOfRooms - 1));
        }
        else {
          this.numberOfChildren =  maxNumPleople - this.numberOfAdults;
        }
      }
    }
  }

  increaseRooms() {
    if (this.numberOfRooms < 5) {
      this.numberOfRooms = this.numberOfRooms + 1;
      if (this.numberOfAdults < this.numberOfRooms)
        this.numberOfAdults = this.numberOfAdults + 1;
    }
  }

  decreaseAdults() {

    if (this.numberOfAdults > 1) {
      this.numberOfAdults = this.numberOfAdults - 1;
      let sumOfPeople = this.numberOfAdults + this.numberOfChildren;
      let fourMultiplies = 4 * (this.numberOfRooms - 1);
      if (this.numberOfRooms > this.numberOfAdults) {
        this.numberOfRooms = this.numberOfRooms - 1;
        if (this.numberOfChildren > (3 * this.numberOfAdults)) {
          this.numberOfChildren = 3 * this.numberOfAdults;
        }
      }
      else if (sumOfPeople < fourMultiplies + 1) {
        this.numberOfRooms = this.numberOfRooms - 1;
      }
    }


  }

  increaseAdults() {
    let sumOfPeople = this.numberOfAdults + this.numberOfChildren;
    if (sumOfPeople < 20) {
      this.numberOfAdults = this.numberOfAdults + 1;

      let fourMultiplies = 4 * this.numberOfRooms;
      if (sumOfPeople == (fourMultiplies)) {
        this.numberOfRooms = this.numberOfRooms + 1;
      }
    }

  }

  decreaseChildren() {
    if (this.numberOfChildren > 0) {
      this.numberOfChildren = this.numberOfChildren - 1;
      let sumOfPeople = this.numberOfAdults + this.numberOfChildren;
      let fourMultiplies = 4 * (this.numberOfRooms - 1);
      if (sumOfPeople < fourMultiplies + 1) {
        this.numberOfRooms = this.numberOfRooms - 1;
      }
    }
  }

  increaseChildren() {
    let sumOfPeople = this.numberOfAdults + this.numberOfChildren;
    if (sumOfPeople < 20) {
      this.numberOfChildren = this.numberOfChildren + 1;
      let fourMultiplies = 4 * this.numberOfRooms;
      let threeMultiplies = 3 * this.numberOfAdults;
      if (this.numberOfChildren == (threeMultiplies + 1)) {
        this.numberOfAdults = this.numberOfAdults + 1;
      }
      if (sumOfPeople == (fourMultiplies)) {
        this.numberOfRooms = this.numberOfRooms + 1;
      }
    }
  }
}
