import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get('./assets/db/users.json')
      .map((res: any) => res);
  }

  shuffleArray(peopleArray: User[]) {

    let currentIndex = peopleArray.length, temporaryValue, randomIndex;

    peopleArray.forEach((element, index) => {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = peopleArray[currentIndex];
      peopleArray[currentIndex] = peopleArray[randomIndex];
      peopleArray[randomIndex] = temporaryValue;
    });
    // While there remain elements to shuffle...

    return peopleArray;
  }

  pairUsers(peopleArray: User[]) {

    const pairedUsers = this.shuffleArray(peopleArray);

    pairedUsers.map((data, index) => {

      if (index === pairedUsers.length - 1) {
        data.giveGift = pairedUsers[0];
      } else {
        data.giveGift = pairedUsers[index + 1];
      }
      return data;
    });

    return pairedUsers;
  }

}
