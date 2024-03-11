import { Route } from '@angular/router'

import { NotFoundComponent } from '@rfs-atomic/not-found'
import { OrdersComponent } from '@rfs-atomic/orders'
import { ProductsComponent } from '@rfs-atomic/products'
import { SettingsComponent } from '@rfs-atomic/settings'
import { WishlistComponent } from '@rfs-atomic/wishlist'
import { NxWelcomeComponent } from './nx-welcome.component'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full',
	},
	{
		path: '/welcome',
		component: NxWelcomeComponent,
	},
	{
		path: 'products',
		component: ProductsComponent,
	},
	{
		path: 'wishlist',
		component: WishlistComponent,
	},
	{
		path: 'orders',
		component: OrdersComponent,
	},
	{
		path: 'settings',
		component: SettingsComponent,
	},
	{
		path: '**',
		redirectTo: '/404',
	},
	{
		path: '/404',
		component: NotFoundComponent,
	},
]
