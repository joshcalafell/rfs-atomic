import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IChipVariant = 'price' | 'date' | 'label' | 'status' | 'default' | 'stock'
export interface IChip {
	label: string
	color:
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'info'
	variant?: IChipVariant
  size: 'small' | 'medium' | 'large'
}
@Component({
  selector: 'rfs-atomic-chip',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
})
export class ChipComponent implements OnInit {
  @Input() label: IChip['label'] = ' '
	@Input() color: IChip['color'] = 'primary'
  @Input() size: IChip['size'] = 'medium'
  @Input() closeable = 'true';
  ngOnInit(): void {
    if (!this.label) {
      throw new Error('The label is required')
    }
  }

  onClose(event: unknown) {
    console.log('Close event', event)
  }
}
