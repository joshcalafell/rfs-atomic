import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { of } from 'rxjs'
import { ProductDetailComponent } from './product-detail.component'
import { candleMock } from '../products/service/candle.mock'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from '@rfs-atomic/products'

describe('ProductDetailComponent', () => {
	let component: ProductDetailComponent
	let fixture: ComponentFixture<ProductDetailComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ProductDetailComponent,
				HashesComponent,
				ButtonRowComponent,
				DetailGroupComponent,
				ProductRatingsComponent,
				RouterTestingModule.withRoutes([]),
			],
			providers: [
				{
					provide: ProductsService,
					useValue: {
						mockSingleProductService: { getProductById: () => of(candleMock) },
					},
				},
				{ provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
			],
		}).compileComponents()
		fixture = TestBed.createComponent(ProductDetailComponent)
		component = fixture.componentInstance

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render product name', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('.product-name')).toBeTruthy()
	})

	it('should render product description', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('.product-description')).toBeTruthy()
	})

	it('should render product price', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-price')).toBeTruthy()
	})

	it('should render product sku', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-sku')).toBeTruthy()
	})

	it('should render product color', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-color')).toBeTruthy()
	})

	it('should render product material', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-material')).toBeTruthy()
	})

	it('should render product dimensions', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-dimensions')).toBeTruthy()
	})

	it('should render product weight', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-weight')).toBeTruthy()
	})

	it('should render product fragrance', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-fragrance')).toBeTruthy()
	})

	it('should render product size', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-size')).toBeTruthy()
	})

	it('should render product burn time', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-burn-time')).toBeTruthy()
	})

	it('should render product scent', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('#product-scent')).toBeTruthy()
	})
})
