import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDetailComponent } from './app-detail/app-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-angular-18-app';
  showTick: boolean = false;
}
