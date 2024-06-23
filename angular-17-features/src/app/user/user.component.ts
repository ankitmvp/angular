import { Component } from '@angular/core';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    standalone: true,
    imports: [],
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
