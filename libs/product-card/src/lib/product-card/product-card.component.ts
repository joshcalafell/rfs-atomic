import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { ChipComponent } from '@rfs-atomic/chip'
import { IDescriptionListItem } from '@rfs-atomic/description-list'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductCardHeaderComponent } from '@rfs-atomic/product-card-header'
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
		DetailGroupComponent,
		RouterModule,
		ProductCardHeaderComponent,
	],
	templateUrl: './product-card.component.html',
	styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
	@Output() addToCartEmitter = new EventEmitter()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() product: any

	cardImage = 'https://i.imgur.com/vL2h90y.jpg'

	constructor(private router: Router) {
		console.log('ProductCardComponent', this.product)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addToCart(product: any) {
		this.addToCartEmitter.emit(product)
	}

	navToDetail() {
		console.log('Navigating to product detail')
		this.router.navigate(['/products', this.product.entity.id])
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup1(product: any): IDescriptionListItem[] {
		return [
			{
				label: 'Fragrance',
				value: product.scent,
			},
			{
				label: 'Color',
				value: product.color,
			},
			{
				label: 'size',
				value: product.size,
			},
			{
				label: 'Availability',
				value: product.stock ? 'In Stock' : 'Out of Stock',
			},
		]
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup2(product: any): IDescriptionListItem[] {
		return [
			{
				label: 'Color',
				value: product.color,
			},
			{
				label: 'Material',
				value: product.material,
			},
			{
				label: 'Wick',
				value: product.wickType,
			},
		]
	}
}
