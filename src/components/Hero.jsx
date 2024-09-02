import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760 ? smallHeroVideo : heroVideo
	);

	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc(smallHeroVideo);
		} else {
			setVideoSrc(heroVideo);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleVideoSrcSet);

		return () => {
			window.removeEventListener('reisze', handleVideoSrcSet);
		};
	}, []);

	useGSAP(() => {
		gsap.to('#hero', { opacity: 1, delay: 2 });
		gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
	}, []);

	return (
		<section className='w-full nav-height bg-black relative'>
			<div className=' w-full flex-center flex-col'>
				<p
					id='hero'
					className='hero-title'
				>
					T'z Products Watch Winder
				</p>
				<div className='md:w-[1000px] w-full mb-12'>
					<video
						className='pointer-events-none'
						autoPlay
						muted
						playsInline={true}
						key={videoSrc}
					>
						<source
							src={videoSrc}
							type='video/mp4'
						/>
					</video>
				</div>
			</div>

			<div
				id='cta'
				className='flex flex-col items-center opacity-0 translate-y-20'
			>
				<a
					href='#highlights'
					className='btn'
				>
					購入
				</a>
				<p className='font-normal text-xl'>82,500円（税込）から</p>
			</div>
		</section>
	);
};

export default Hero;
