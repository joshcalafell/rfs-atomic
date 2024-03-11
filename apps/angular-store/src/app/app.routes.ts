import { Route } from '@angular/router'
import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'

export const appRoutes: Route[] = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: '/home',
		component: NxWelcomeComponent,
	},
]
