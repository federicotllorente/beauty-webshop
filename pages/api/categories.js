const categories = [
	{
		id: 1,
		name: 'Blush',
		path: '/blush'
	},
	{
		id: 2,
		name: 'Bronzer',
		path: '/bronzer'
	},
	{
		id: 3,
		name: 'Eyebrow',
		path: '/eyebrow'
	},
	{
		id: 4,
		name: 'Eyeliner',
		path: '/eyeliner'
	},
	{
		id: 5,
		name: 'Eyeshadow',
		path: '/eyeshadow'
	},
	{
		id: 6,
		name: 'Foundation',
		path: '/foundation'
	},
	{
		id: 7,
		name: 'Lip liner',
		path: '/lip-liner'
	},
	{
		id: 8,
		name: 'Lipstick',
		path: '/lipstick'
	},
	{
		id: 9,
		name: 'Mascara',
		path: '/mascara'
	},
	{
		id: 10,
		name: 'Nail polish',
		path: '/nail-polish'
	}
]

export default (req, res) => {
	res.status(200).json(categories)
}