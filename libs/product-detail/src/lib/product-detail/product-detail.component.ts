import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { HashesComponent } from '@rfs-atomic/hashes'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { of } from 'rxjs'
import { candleMock } from './product.mock'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { Router } from '@angular/router'

@Component({
	selector: 'rfs-atomic-product-detail',
	standalone: true,
	imports: [
		CommonModule,
		HashesComponent,
		ButtonRowComponent,
		DetailGroupComponent,
		ProductRatingsComponent,
	],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
	product$ = of(candleMock)

	backButton

	constructor(private router: Router) {
		console.log('ProductDetailComponent')
		this.backButton = {
			label: '<- Back ',
			icon: 'arrow-left',
			clickEmitter: () => this.router.navigate(['/products']),
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addToCart(product: any) {
		console.log('product', product)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup1(product: any) {
		return [
			{
				label: 'Fragrance',
				value: product.scent,
			},
			{
				label: 'Availability',
				value: product.stock ? 'In Stock' : 'Out of Stock',
			},
		]
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup2(product: any) {
		return [
			{
				label: 'Size',
				value: product.size,
			},
			{
				label: 'Burn Time',
				value: product.burnTime,
			},
			{
				label: 'Price',
				value: product.price,
				type: 'currency',
			},
		]
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getProductDetailsGroup3(product: any) {
		return [
			{
				label: 'Wick',
				value: product.wick,
			},
			{
				label: 'Material',
				value: product.material,
			},
			{
				label: 'Color',
				value: product.color,
			},
		]
	}

	goBack() {
		this.router.navigate(['/products'])
	}
}
