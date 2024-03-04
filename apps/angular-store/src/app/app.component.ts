import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from 'libs/button/src';


@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'rfs-atomic-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Atomic Design';


  onButtonClick(event: unknown) {
    console.log('Button clicked', event);
  }
}
