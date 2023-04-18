import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	git,
	figma,
	storybook,
	dsr,
	udemy,
	redcollar,
	neoflex,
	carrent,
	jobit,
	tripguide,
	threejs,
	neoflex2,
	tictac,
	todo,
	got,
	pic,
	window,
	puls,
	test
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Сross-browser',
		icon: web,
	},
	{
		title: 'Bundle optimization',
		icon: mobile,
	},
	{
		title: 'SPA / SSR',
		icon: backend,
	},
	{
		title: 'React & Zustand | Redux',
		icon: creator,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'storybook',
		icon: storybook,
	},
]

const experiences = [
	{
		title: 'WEB-developer',
		company_name: 'Udemy',
		icon: udemy,
		iconBg: '#383E56',
		date: 'March 2021 - June 2021',
		points: [
			'Familiarity with the basics of markup, semantics and styling.',
			'First layouts.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Frontend developer internship',
		company_name: 'RedCollar',
		icon: redcollar,
		iconBg: '#E6DEDD',
		date: 'May 2022 - December 2022',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Familiarity with typescript and writing projects on it.',
		],
	},
	{
		title: 'The educational center',
		company_name: 'Neoflex',
		icon: neoflex,
		iconBg: '#383E56',
		date: 'December 2022 - March 2023',
		points: [
			'Teamwork process.',
			'Active work with api, form validation, memory leak debugging and project optimization.',
			'Strengthening quick layout skills with and without the use of libraries.',
		],
	},
	{
		title: 'JS Bootcamp',
		company_name: 'DSR',
		icon: dsr,
		iconBg: '#E6DEDD',
		date: 'March 2023 - Present',
		points: [
			'Developing and maintaining web applications using React, TS, Effector and other related technologies.',
			'Work with storybook',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'Bank app',
		description:
			'Creation of a website that allows users to get information about the bank and order a credit card.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'redux',
				color: 'yellow-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: neoflex2,
		source_code_link: 'https://github.com/kreanx/NeoBank',
	},
	{
		name: 'RunSmart',
		description:
			'The site on which the sale of heart rate monitors is implemented.',
		tags: [
			{
				name: 'js',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
		],
		image: puls,
		source_code_link: 'https://kreanx.github.io/Portfolio/dist/BEMTrain/src/',
	},
	{
		name: 'TicTacToe',
		description: 'A simple TicTacToe game implemented in react in half an hour',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: tictac,
		source_code_link: 'https://kreanx.github.io/TicTacToe/',
	},
	{
		name: 'ToDo app',
		description:
			'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'scss',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: todo,
		source_code_link: 'https://kreanx.github.io/React_pannel/',
	},
	{
		name: 'GOT',
		description:
			'An app built with React that allows you to view information about books/characters/houses in the Game of Thrones universe.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'scss',
				color: 'green-text-gradient',
			},
		],
		image: got,
		source_code_link: 'https://kreanx.github.io/characters',
	},
	{
		name: 'Drawing shop website',
		description:
			'Implemented the functionality and layout of a test site for the sale of paintings and sketches.',
		tags: [
			{
				name: 'js',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
		],
		image: pic,
		source_code_link: 'https://kreanx.github.io/Js_training-1/dist/',
	},
	{
		name: 'Windows shop website',
		description:
			'Implemented the functionality and layout of a test site for the sale of windows and sketches.',
		tags: [
			{
				name: 'js',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
		],
		image: window,
		source_code_link: 'https://kreanx.github.io/Js_training-4/dist/',
	},
	{
		name: 'Training js site',
		description:
			'Interesting landing page with implemented animations and js components.',
		tags: [
			{
				name: 'js',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
		],
		image: test,
		source_code_link: 'https://kreanx.github.io/Js_training-4/dist/',
	},
]

export { services, technologies, experiences, testimonials, projects }
