import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.less']
})
export class SantaComponent implements OnInit {

  users: User[];
  showSanta = false;
  message = 'Show Santa';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data['users'];
      this.users = this.userService.shuffleArray(this.users);
      this.users = this.userService.pairUsers(this.users);
      this.users = this.userService.shuffleArray(this.users);

      console.log(this.users);
    } , (error) => console.log(error));
  }

  onShowSanta() {
    this.showSanta = ((this.message) === 'Show Santa') ? true : false;
    this.message = ((this.message) === 'Show Santa') ? 'Hide Santa' : 'Show Santa';
  }

}
