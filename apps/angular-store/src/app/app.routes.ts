import { Route } from '@angular/router'

export const appRoutes: Route[] = [
	{
		path: '',
		redirectTo: 'about',
		pathMatch: 'full',
	},
	{
		path: 'about',
		loadComponent: () =>
			import('@rfs-atomic/about').then((m) => m.AboutComponent),
	},
	{
		path: 'products',
		loadComponent: () =>
			import('@rfs-atomic/products').then((m) => m.ProductsComponent),
	},
	{
		path: 'products/:id',
		loadComponent: () =>
			import('@rfs-atomic/product-detail').then(
				(m) => m.ProductDetailComponent
			),
	},
	{
		path: 'wishlist',
		loadComponent: () =>
			import('@rfs-atomic/wishlist').then((m) => m.WishlistComponent),
	},
	{
		path: 'orders',
		loadComponent: () =>
			import('@rfs-atomic/orders').then((m) => m.OrdersComponent),
	},
	{
		path: 'settings',
		loadComponent: () =>
			import('@rfs-atomic/settings').then((m) => m.SettingsComponent),
	},
	{
		path: '404',
		loadComponent: () =>
			import('@rfs-atomic/not-found').then((m) => m.NotFoundComponent),
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
]
