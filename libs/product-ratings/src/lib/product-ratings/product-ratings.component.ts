import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ProductRatingsStarComponent } from '@rfs-atomic/product-ratings-star'

export interface IStar {
	icon: string
	color: string
	size: string
}
@Component({
	selector: 'rfs-atomic-product-ratings',
	standalone: true,
	imports: [CommonModule, ProductRatingsStarComponent],
	templateUrl: './product-ratings.component.html',
	styleUrl: './product-ratings.component.scss',
})
export class ProductRatingsComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product!: any
	stars: IStar[] = []

	ngOnInit(): void {
		this.stars = this.getStars(this.product)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public getStars(product: any): IStar[] {
		const rounded = Math.ceil(Number(product.rating))

		return [
			...Array(rounded).fill({
				icon: 'star',
				color: 'black',
				size: 'small',
			}),
			...Array(5 - rounded).fill({
				icon: 'empty-star',
				color: 'black',
				size: 'small',
			}),
		]
	}
}
