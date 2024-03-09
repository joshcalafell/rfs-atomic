import { Route } from '@angular/router'
import { AppComponent } from './app.component'

export const appRoutes: Route[] = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: '/home',
		component: AppComponent,
	},
]
