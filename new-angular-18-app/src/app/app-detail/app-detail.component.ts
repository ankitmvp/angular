import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app-detail',
  standalone: true,
  imports: [],
  templateUrl: './app-detail.component.html',
  styleUrl: './app-detail.component.css'
})
export class AppDetailComponent {
  tick: number = 0;
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    interval(1000)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(t => {
      this.tick =+ t;
      console.log(this.tick);
    })
  }

  ngOnDestroy() {
  }
}
