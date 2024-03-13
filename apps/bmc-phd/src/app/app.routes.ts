import { Route } from '@angular/router'
import { PageLayoutComponent } from './page-layout/page-layout.component'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: PageLayoutComponent,
	},
	{
		path: 'about',
		component: PageLayoutComponent,
	},
	{
		path: 'research', // Pics up books, buy, speakig engagements, link to cv
		component: PageLayoutComponent,
	},
	{
		path: 'teaching-and-mentoring', // Classes tought, list of grad students or "Advisees".
		component: PageLayoutComponent,
	},
	{
		path: 'media-appearances', //
		component: PageLayoutComponent,
	},
	{
		path: 'speaking-engagements', // Advert.
		component: PageLayoutComponent,
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
	{
		path: '404',
		component: PageLayoutComponent,
	},
]
