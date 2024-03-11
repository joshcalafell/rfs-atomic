import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'rfs-atomic-product-ratings-star',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './product-ratings-star.component.html',
	styleUrl: './product-ratings-star.component.scss',
})
export class ProductRatingsStarComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() star!: any
}
