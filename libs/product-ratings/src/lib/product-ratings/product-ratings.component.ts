import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ProductRatingsStarComponent } from '@rfs-atomic/product-ratings-star'
@Component({
	selector: 'rfs-atomic-product-ratings',
	standalone: true,
	imports: [CommonModule, ProductRatingsStarComponent],
	templateUrl: './product-ratings.component.html',
	styleUrl: './product-ratings.component.scss',
})
export class ProductRatingsComponent implements OnInit {
	@Input() product: any
	stars: { icon: string; color?: string; size: string }[] = []

	ngOnInit(): void {
		this.stars = this.getStars(this.product)
	}

	public getStars(
		product: any
	): { icon: string; color?: string; size: string }[] {
		const rounded = Math.ceil(Number(product?.rating || 5))

		return [
			...Array(rounded).fill({ icon: 'star', color: 'black', size: 'small' }),
			...Array(5 - rounded).fill({
				icon: 'empty-star',
				color: 'black',
				size: 'small',
			}),
		]
	}
}
