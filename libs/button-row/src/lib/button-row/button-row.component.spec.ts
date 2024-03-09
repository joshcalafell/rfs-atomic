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
				palleteColor: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Wishlist',
				palleteColor: 'secondary',
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
		expect(compiled.querySelector('rfs-atomic-button')).toBeTruthy()
	})

	it('should have arrows if designated', () => {
		component.buttons = [
			{
				label: 'Cart',
				palleteColor: 'primary',
				size: 'medium',
				disabled: false,
				icon: 'arrow',
			},
			{
				label: 'Wishlist',
				palleteColor: 'secondary',
				size: 'medium',
				disabled: false,
				icon: 'arrow',
			},
		]

		fixture.detectChanges()

		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('icon')
		).toContain('arrow')
	})

	it('should render buttons with correct label', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('rfs-atomic-button').textContent).toContain(
			'Cart'
		)
		expect(compiled.querySelector('rfs-atomic-button').textContent).toContain(
			'Wishlist'
		)
	})

	it('should render buttons with correct palleteColor', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('palleteColor')
		).toContain('primary')
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('palleteColor')
		).toContain('secondary')
	})

	it('should render buttons with correct size', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('size')
		).toContain('medium')
	})

	it('should render buttons with correct disabled', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('disabled')
		).toBeFalsy()
	})

	it('should render buttons with correct disabled', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('disabled')
		).toBeFalsy()
	})

	it('should render buttons with correct disabled', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('disabled')
		).toBeFalsy()
	})

	it('should render buttons with correct disabled', () => {
		const compiled = fixture.nativeElement
		expect(
			compiled.querySelector('rfs-atomic-button').getAttribute('disabled')
		).toBeFalsy()
	})
})
