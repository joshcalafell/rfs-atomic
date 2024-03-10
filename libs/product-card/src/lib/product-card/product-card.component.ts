import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChipComponent } from '@rfs-atomic/chip'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { IDescriptionListItem } from '@rfs-atomic/description-list'

@Component({
	selector: 'rfs-atomic-product-card',
	standalone: true,
	imports: [
		CommonModule,
		ChipComponent,
		ButtonRowComponent,
		HashesComponent,
		ProductRatingsComponent,
		DetailGroupComponent,
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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup1(product: any): IDescriptionListItem[] {
		return [
			{ label: 'Fragrance', value: product.scent },
			{
				label: 'Availability',
				value: product.stock ? 'In Stock' : 'Out of Stock',
			},
		]
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup2(product: any): IDescriptionListItem[] {
		return [
			{ label: 'Color', value: product.color },
			{ label: 'Material', value: product.material },
			{ label: 'Wick', value: product.wickType },
		]
	}
}
