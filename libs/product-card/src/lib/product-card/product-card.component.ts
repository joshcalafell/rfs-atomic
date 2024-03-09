import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChipComponent } from '@rfs-atomic/chip'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsStarComponent } from '@rfs-atomic/product-ratings-star'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'

@Component({
	selector: 'rfs-atomic-product-card',
	standalone: true,
	imports: [
		CommonModule,
		ChipComponent,
		ButtonRowComponent,
		HashesComponent,
		ProductRatingsComponent,
		ProductRatingsStarComponent,
	],
	templateUrl: './product-card.component.html',
	styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
	@Output() addToCartEmitter = new EventEmitter()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product = {} as any

	cardImage = 'https://i.imgur.com/vL2h90y.jpg'

	addToCart(product: any) {
		this.addToCartEmitter.emit(product)
	}

	getProductDetailsGroup1(
		product: any
	): { label: string; value: string | number }[] {
		return [
			{ label: 'Fragrance', value: product.scent },
			{
				label: 'Availability',
				value: product.stock ? 'In Stock' : 'Out of Stock',
			},
		]
	}

	getProductDetailsGroup2(
		product: any
	): { label: string; value: string | number }[] {
		return [
			{ label: 'Color', value: product.color },
			{ label: 'Material', value: product.material },
			{ label: 'Wick', value: product.wickType },
		]
	}
}
