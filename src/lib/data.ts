import { Menu } from './types';
import UsersIcon from '../assets/users.svg?react';
import BuildIcon from '../assets/build.svg?react';
import TimeIcon from '../assets/time.svg?react';

export const Menus: Menu[] = [
	{
		name: 'Features',
		subMenuHeading: ['Design', 'Scale'],
		hasSubMenu: true,
		subMenu: [
			{
				name: 'Design',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Management',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: TimeIcon,
			},
			{
				name: 'Navigation',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: BuildIcon,
			},
			{
				name: 'CMS',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
		],
		gridCols: 2,
	},
	{
		name: 'Resources',
		subMenuHeading: ['Get started', 'Programs', 'Recent'],
		hasSubMenu: true,
		subMenu: [
			{
				name: 'Markplace',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Meetups',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: BuildIcon,
			},
			{
				name: 'Updates',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Academy',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: TimeIcon,
			},
			{
				name: 'Blog',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: BuildIcon,
			},
			{
				name: 'Figma',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Experts',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Gallery',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: BuildIcon,
			},
		],
		gridCols: 3,
	},
	{
		name: 'Support',
		hasSubMenu: true,
		subMenu: [
			{
				name: 'Help',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Community',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: TimeIcon,
			},
			{
				name: 'Emergency',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: BuildIcon,
			},
		],
		gridCols: 2,
	},
	{
		name: 'Enterprise',
		subMenuHeading: ['Overview', 'Features'],
		hasSubMenu: true,
		subMenu: [
			{
				name: 'Enterprise',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Collaboration',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: UsersIcon,
			},
			{
				name: 'Customers',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: BuildIcon,
			},
			{
				name: 'Security',
				desc: 'Lorem, ? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
				icon: TimeIcon,
			},
		],
		gridCols: 2,
	},
	{
		name: 'Pricing',
		hasSubMenu: false,
	},
	{
		name: 'Contact',
		hasSubMenu: false,
	},
];

export const tabs = [
	{ id: 'cloud', label: 'Cloud' },
	{ id: 'network', label: 'Network' },
	{ id: 'scale', label: 'Scale' },
];

export const tabContent: Record<
	string,
	{ title: string; description: string; features: string[]; image: string }
> = {
	cloud: {
		title: 'Repellendus, neque voluptatum deleniti corporis officia iure!',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus autem saepe laboriosam perspiciatis laudantium vel porro, possimus nemo? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
		],
		image: 'repo-runner.jpeg',
	},
	network: {
		title: 'Repellendus, neque voluptatum deleniti corporis officia iure!',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus autem saepe laboriosam perspiciatis laudantium vel porro, possimus nemo? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
		],
		image: 'repo-runner.jpeg',
	},
	scale: {
		title: 'Repellendus, neque voluptatum deleniti corporis officia iure!',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus autem saepe laboriosam perspiciatis laudantium vel porro, possimus nemo? Laborum debitis nam cupiditate repellendus, neque voluptatum deleniti corporis officia iure!',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates quaerat explicabo et consequuntur officia! Ea ad reprehenderit obcaecati quibusdam maxime temporibus voluptatem deserunt ex, animi quisquam culpa illo numquam.',
		],
		image: 'repo-runner.jpeg',
	},
};
