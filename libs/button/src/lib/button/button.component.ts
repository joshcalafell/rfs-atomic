import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type TpalleteColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

type TButtonSize = 'small' | 'medium' | 'large';

export interface IAtomicUiButton {
  label: string;
  palleteColor: TpalleteColor;
  disabled: boolean;
  size: 'small' | 'medium' | 'large';
  type?: 'button' | 'animated-arrow';
}

@Component({
  selector: 'rfs-atomic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements IAtomicUiButton {
  @Output() clickEmitter: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input() label!: string;
  @Input() palleteColor: TpalleteColor = 'primary';
  @Input() disabled = false;
  @Input() size: TButtonSize = 'medium';
  @Input() type: 'button' | 'animated-arrow' = 'button';

  onClick(event: unknown) {
    this.clickEmitter.emit(event);
  }
}
