import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from 'libs/button/src' // <== TODO: ???
import { HeaderComponent } from '@rfs-atomic/header'
import { FooterComponent } from '@rfs-atomic/footer'
import { ActivatedRoute, RouterModule } from '@angular/router'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
				RouterTestingModule,
				ButtonComponent,
				HeaderComponent,
				FooterComponent,
				RouterModule,
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: { path: 'home' },
						},
					},
				},
			],
		}).compileComponents()
	})

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('h1')?.textContent).toContain('Angular Store')
	})

	it(`should have as title 'Angular Store'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app.title).toEqual('Angular Store')
	})
})
