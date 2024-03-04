
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, IAtomicUiButton } from '@rfs-atomic/button';

@Component({
  selector: 'rfs-atomic-ui',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
})
export class UiComponent implements OnInit {
  button: IAtomicUiButton = {
    label: 'Click me',
    palleteColor: 'primary',
    disabled: false,
    size: 'medium',
    type: 'animated-arrow',

  };

  buttons: IAtomicUiButton[] = []

  onButtonClick(event: unknown) {
    console.log('Button clicked', event);
  }

  ngOnInit(): void {
    const colors = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'info', 'light', 'dark', 'link'];
    const sizes = ['small', 'medium', 'large'];
    const types = ['button', 'animated-arrow'];

    for (const color of colors) {
      for (const size of sizes) {
        for (const type of types) {
          this.buttons.push({
            label: `${color} ${size} ${type}`,
            palleteColor: color.toString() as 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success' | 'info' | 'light' | 'dark' | 'link',
            disabled: false,
            size: size.toString() as 'small' | 'medium' | 'large',
            type: type.toString() as 'button' | 'animated-arrow',
          });
        }
      }
    }
  }
}
