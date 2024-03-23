/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ICandleProduct, ProductsService } from './products.service'
import { Observable } from 'rxjs'
import { ProductCardComponent } from '@rfs-atomic/product-card'
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

	getProducts(): Observable<any[]> {
		return this.service.mockProductService.getProducts()
	}

	addToCart(product: ICandleProduct) {
		this.service.mockProductService.addToCart(product)
	}
}
