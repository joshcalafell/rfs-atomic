import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NotFoundComponent } from './not-found.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ButtonRowComponent } from '@rfs-atomic/button-row'

describe('NotFoundComponent', () => {
	let component: NotFoundComponent
	let fixture: ComponentFixture<NotFoundComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NotFoundComponent, ButtonRowComponent, RouterTestingModule],
		}).compileComponents()

		fixture = TestBed.createComponent(NotFoundComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render a not found message', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('h2')).toBeTruthy()
	})

	it('should render a not found message with the correct text', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('h2').textContent = '404 - Page Not Found'
		expect(compiled.querySelector('h2').textContent).toContain(
			'404 - Page Not Found'
		)
	})
})
