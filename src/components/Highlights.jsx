import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
	useGSAP(() => {
		gsap.to('#title', { opacity: 1, y: 0 });
		gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
	}, []);

	return (
		<section
			id='highlights'
			className='w-screen overflow-hidden h-full common-padding bg-zinc mt-20'
		>
			<div className='screen-max-width'>
				<div className='mb-16 w-full md:flex items-end justify-between'>
					<h1
						id='title'
						className='section-heading'
					>
						求められていたのは、
						<br />
						最高品質のワインダー
					</h1>

					{/* <p className='link mb-3'>
						ビデオを見る
						<img
							src={watchImg}
							alt='watch'
							className='ml-2'
						/>
					</p> */}
					<p className='link'>
						T’z Productsについて
						<img
							src={rightImg}
							alt='right'
							className='ml-2'
						/>
					</p>
				</div>

				<VideoCarousel />
			</div>
		</section>
	);
};

export default Highlights;
