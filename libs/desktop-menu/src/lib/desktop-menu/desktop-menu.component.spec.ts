import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DesktopMenuComponent } from './desktop-menu.component'
import { RouterTestingModule } from '@angular/router/testing'
import { LinkComponent } from '@rfs-atomic/link'
import { ActivatedRoute, RouterModule } from '@angular/router'

describe('DesktopMenuComponent', () => {
	let component: DesktopMenuComponent
	let fixture: ComponentFixture<DesktopMenuComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				DesktopMenuComponent,
				RouterTestingModule,
				LinkComponent,
				RouterModule.forChild([]),
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: { path: 'primary' },
						},
					},
				},
			],
		}).compileComponents()
		fixture = TestBed.createComponent(DesktopMenuComponent)
		component = fixture.componentInstance
		component.menuItems = [
			{
				label: 'Dashboard',
				path: '/primary',
			},
		]
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
