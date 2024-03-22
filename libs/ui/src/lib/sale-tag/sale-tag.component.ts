import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
	selector: 'rfs-atomic-sale-tag',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sale-tag.component.html',
	styleUrl: './sale-tag.component.scss',
})
export class SaleTagComponent {
	@Input() label = ''
}
