export type Project = {
	id: number
	name: string
	area: string
	link: string
	image: string
	imageAlt: string
	color?: string
}

export const projects: Project[] = [
	{
		id: 0,
		name: 'Miinto 2.0',
		area: 'Design and Development',
		image: 'https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png',
		imageAlt: 'Miinto 2.0 by Alirom Solutions',
		link: '/project/miinto',
	},
	{
		id: 1,
		name: 'Tsks.app',
		area: 'Design and Development',
		image: 'https://cdn.dribbble.com/users/1858541/screenshots/15209401/media/5781bdac4f41c65f58ea597cad62c2ce.png',
		imageAlt: 'Tsks task manager app by Alirom Solutions',
		link: '/project/tsks',
		color: '#1D1D26',
	},
	{
		id: 2,
		name: '100 days of UI',
		area: 'Design',
		image: 'https://cdn.dribbble.com/users/1858541/screenshots/15234356/media/5514ddf67d4ba1ab8e763ceb88254253.png',
		imageAlt: '100 days of UI by Alirom Solutions',
		link: '/project/100-days-of-ui',
		color: '#E3E3E3',
	},
]
