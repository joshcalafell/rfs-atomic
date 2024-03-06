import { IDesktopMenuItem } from './IDesktopMenuItem.js'

export const mockDesktopMenuItems: IDesktopMenuItem[] = [
	{
		label: 'Dashboard',
		path: '/dashboard',
		icon: 'dashboard',
		paletteColor: 'primary',
		children: [
			{
				label: 'Dashboard 1',
				path: '/dashboard/dashboard-1',
				icon: 'dashboard-1',
				paletteColor: 'primary',
				children: [],
			},
			{
				label: 'Dashboard 2',
				path: '/dashboard/dashboard-2',
				icon: 'dashboard-2',
				paletteColor: 'primary',
				children: [],
			},
		],
	},
	{
		label: 'Inventory',
		path: '/inventory',
		icon: 'inventory',
		paletteColor: 'secondary',
		children: [
			{
				label: 'Products',
				path: '/inventory/products',
				icon: 'products',
				paletteColor: 'secondary',
				children: [],
			},
			{
				label: 'Categories',
				path: '/inventory/categories',
				icon: 'categories',
				paletteColor: 'secondary',
				children: [],
			},
			{
				label: 'Stock',
				path: '/inventory/stock',
				icon: 'stock',
				paletteColor: 'secondary',
				children: [],
			},
		],
	},
	{
		label: 'Orders',
		path: '/orders',
		icon: 'orders',
		paletteColor: 'tertiary',
		children: [
			{
				label: 'New Orders',
				path: '/orders/new-orders',
				icon: 'new-orders',
				paletteColor: 'tertiary',
				children: [],
			},
			{
				label: 'Order History',
				path: '/orders/order-history',
				icon: 'order-history',
				paletteColor: 'tertiary',
				children: [],
			},
		],
	},
	{
		label: 'Customers',
		path: '/customers',
		icon: 'customers',
		paletteColor: 'quaternary',
		children: [
			{
				label: 'Customer List',
				path: '/customers/customer-list',
				icon: 'customer-list',
				paletteColor: 'quaternary',
				children: [],
			},
			{
				label: 'Customer Groups',
				path: '/customers/customer-groups',
				icon: 'customer-groups',
				paletteColor: 'quaternary',
				children: [],
			},
		],
	},
	{
		label: 'Reports',
		path: '/reports',
		icon: 'reports',
		paletteColor: 'quinary',
		children: [
			{
				label: 'Sales Report',
				path: '/reports/sales-report',
				icon: 'sales-report',
				paletteColor: 'quinary',
				children: [],
			},
			{
				label: 'Stock Report',
				path: '/reports/stock-report',
				icon: 'stock-report',
				paletteColor: 'quinary',
				children: [],
			},
		],
	},
	{
		label: 'Settings',
		path: '/settings',
		icon: 'settings',
		paletteColor: 'senary',
		children: [
			{
				label: 'User Management',
				path: '/settings/user-management',
				icon: 'user-management',
				paletteColor: 'senary',
				children: [],
			},
			{
				label: 'Company Settings',
				path: '/settings/company-settings',
				icon: 'company-settings',
				paletteColor: 'senary',
				children: [],
			},
		],
	},
]
