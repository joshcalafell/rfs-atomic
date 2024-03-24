/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ProductCardComponent } from '@rfs-atomic/product-card'
import { Observable } from 'rxjs'
import { ICandleProduct, ProductsService } from './service/products.service'
@Component({
	selector: 'rfs-atomic-products',
	standalone: true,
	imports: [CommonModule, ProductCardComponent],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
	service: ProductsService
	products: ICandleProduct[] = []

	constructor(service: ProductsService) {
		this.service = service
	}

	ngOnInit(): void {
		this.getProducts().subscribe((products: any[]) => {
			this.products = products
		})
	}

	getProducts(): Observable<ICandleProduct[]> {
		return this.service.mockProductService.getProducts()
	}

	addToCart(product: ICandleProduct) {
		console.log('Added to Cart', product)
	}

	addToWishlist(product: ICandleProduct) {
		console.log('Added to Wishlist', product)
	}
}
