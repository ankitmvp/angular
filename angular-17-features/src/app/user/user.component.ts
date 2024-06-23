import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    standalone: true,
    imports: [NgFor],
})
export class UserComponent {
  users: any;
  constructor() {}
  ngOnInit() {
    fetch('http://dummyjson.com/users').then((res) =>
      res.json().then((data) => (this.users = data.users))
    );
  }
}
