import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { of } from 'rxjs'
import { candleMock } from './product.mock'

@Component({
	selector: 'rfs-atomic-product-detail',
	standalone: true,
	imports: [
		CommonModule,
		HashesComponent,
		ButtonRowComponent,
		ProductRatingsComponent,
	],
	templateUrl: './product-detail.component.html',
	styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
	product$ = of(candleMock)

	constructor() {
		console.log('ProductDetailComponent')
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addToCart(product: any) {
		console.log('product', product)
	}
}
