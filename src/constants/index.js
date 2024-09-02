import {
	tmw00Img,
	tmw05Img,
	tmw04Img,
	tmw03Img,
	tmw02Img,
	highlightFirstVideo,
	highlightFourthVideo,
	highlightSecondVideo,
	highlightThirdVideo,
} from '../utils';

export const navLists = ['Store', 'Models', 'Custom', 'About', 'Support'];

export const hightlightsSlides = [
	{
		id: 1,
		textLists: ['純日本製', 'ハンドメイドのクオリティ'],
		video: highlightFirstVideo,
		videoDuration: 4,
	},
	{
		id: 2,
		textLists: ['運転していることを忘れるほど、', '優れた静音性'],
		video: highlightSecondVideo,
		videoDuration: 4,
	},
	{
		id: 3,
		textLists: ['高い耐久性で、', '長時間運転もおまかせ'],
		video: highlightThirdVideo,
		videoDuration: 4,
	},
	{
		id: 4,
		textLists: ['時計の', '磁気帯び対策も万全'],
		video: highlightFourthVideo,
		videoDuration: 4,
	},
];

export const models = [
	{
		id: 1,
		title: 'TMW00 フラッグシップモデル',
		color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
		img: tmw00Img,
	},
	{
		id: 2,
		title: 'TMW05 時計５個巻き用巻上機',
		color: ['#53596E', '#6395ff', '#21242e'],
		img: tmw05Img,
	},
	{
		id: 3,
		title: 'TMW04 時計４個巻き用巻上機',
		color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
		img: tmw04Img,
	},
	{
		id: 4,
		title: 'TMW03 時計３個巻き用巻上機',
		color: ['#454749', '#3b3b3b', '#181819'],
		img: tmw03Img,
	},
	{
		id: 5,
		title: 'TMW02 時計２個巻き用巻上機',
		color: ['#485111', '#3b3b3b', '#181819'],
		img: tmw02Img,
	},
];

export const sizes = [
	{ label: 'front', value: 'small' },
	{ label: 'side', value: 'large' },
];

export const footerLinks = [
	'プライバシーポリシー',
	'利用規約',
	'返金ポリシー',
	'配送ポリシー',
	'特定商取引法に基づく表記',
];
