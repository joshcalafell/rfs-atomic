/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import {
	BehaviorSubject,
	Subscription,
	catchError,
	map,
	switchMap,
	throwError,
} from 'rxjs'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from '@rfs-atomic/products'

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
export class ProductDetailComponent implements OnInit, OnDestroy {
	product: any
	backButton: {
		label: string
		paletteColor: string
		size: string
		disabled: boolean
	}
	subscriptions$ = new Subscription()

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private ps: ProductsService
	) {
		this.backButton = {
			label: '<- Back ',
			paletteColor: 'primary',
			size: 'medium',
			disabled: false,
		}
	}

	ngOnInit() {
		this.subscriptions$.add(
			this.activatedRoute.params
				.pipe(
					map((params) => params['id']),
					switchMap((id) => this.ps.mockProductService.getProductById(id)),
					catchError((error) => {
						console.error('Error fetching product', error)
						return throwError(error)
					})
				)
				.subscribe((product) => (this.product = product))
		)
	}

	ngOnDestroy(): void {
		this.subscriptions$.unsubscribe()
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
	addToCart(product: any) {
		//
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
