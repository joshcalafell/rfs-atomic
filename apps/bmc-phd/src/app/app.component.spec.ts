import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from '@rfs-atomic/header'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
				NxWelcomeComponent,
				RouterTestingModule,
				HeaderComponent,
			],
		}).compileComponents()

		const fixture = TestBed.createComponent(AppComponent)

		const component = fixture.componentInstance

		component.title = 'Bernadette Calafell Ph.D.'
		component.user = {
			firstName: 'Bernadette',
			lastName: 'Calafell',
			middleName: 'Marie',
			prefix: 'Dr.',
			suffix: 'Ph.D.',
		}
		component.menuItems = [
			{
				label: 'Home',
				path: '/',
			},
			{
				label: 'About',
				path: '/about',
			},
			{
				label: 'Contact',
				path: '/contact',
			},
		]

		fixture.detectChanges()
	})

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app).toBeTruthy()
	})

	it(`should have as title 'Bernadette Calafell Ph.D.'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app.title).toEqual('Bernadette Calafell Ph.D.')
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('rfs-atomic-header').textContent).toBeTruthy()
	})
})
