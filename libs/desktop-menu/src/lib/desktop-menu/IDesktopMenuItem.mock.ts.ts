import { IDesktopMenuItem } from './IDesktopMenuItem.js'

export const mockDesktopMenuItems: IDesktopMenuItem[] = [
	{
		label: 'Dashboard',
		path: '/dashboard',
		icon: 'dashboard',
		paletteColor: 'primary',
		children: [],
	},
	{
		label: 'Inventory',
		path: '/inventory',
		icon: 'inventory',
		paletteColor: 'secondary',
		children: [],
	},
	{
		label: 'Orders',
		path: '/orders',
		icon: 'orders',
		paletteColor: 'tertiary',
		children: [],
	},
	{
		label: 'Customers',
		path: '/customers',
		icon: 'customers',
		paletteColor: 'quaternary',
		children: [],
	},
	{
		label: 'Reports',
		path: '/reports',
		icon: 'reports',
		paletteColor: 'quinary',
		children: [],
	},
	{
		label: 'Settings',
		path: '/settings',
		icon: 'settings',
		paletteColor: 'senary',
		children: [],
	},
]
