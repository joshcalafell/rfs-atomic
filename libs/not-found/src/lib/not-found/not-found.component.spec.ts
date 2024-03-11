import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NotFoundComponent } from './not-found.component'
import { ButtonComponent } from '@rfs-atomic/button'
import { RouterTestingModule } from '@angular/router/testing'

describe('NotFoundComponent', () => {
	let component: NotFoundComponent
	let fixture: ComponentFixture<NotFoundComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NotFoundComponent, ButtonComponent, RouterTestingModule],
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
		expect(compiled.querySelector('.not-found')).toBeTruthy()
	})

	it('should render a not found message with the correct text', () => {
		const compiled = fixture.nativeElement
		compiled.querySelector('.not-found').textContent = '404 - Page Not Found'
		expect(compiled.querySelector('.not-found').textContent).toContain(
			'404 - Page Not Found'
		)
	})
})