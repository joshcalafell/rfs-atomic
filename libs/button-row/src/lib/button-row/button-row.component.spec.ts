import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonRowComponent } from './button-row.component'
import { ButtonComponent } from '@rfs-atomic/button'

describe('ButtonRowComponent', () => {
	let component: ButtonRowComponent
	let fixture: ComponentFixture<ButtonRowComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ButtonRowComponent, ButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ButtonRowComponent)

		component = fixture.componentInstance

		component.buttons = [
			{
				label: 'Cart',
				paletteColor: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Wishlist',
				paletteColor: 'secondary',
				size: 'medium',
				disabled: false,
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render buttons', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('.ui-button')).toBeTruthy()
	})
})
