import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
	const videoRef = useRef();

	useGSAP(() => {
		gsap.to('#exploreVideo', {
			scrollTrigger: {
				trigger: '#exploreVideo',
				toggleActions: 'play pause reverse restart',
				start: '-10% bottom',
			},
			onComplete: () => {
				videoRef.current.play();
			},
		});

		animateWithGsap('#features_title', { y: 0, opacity: 1 });
		animateWithGsap(
			'.g_grow',
			{ scale: 1, opacity: 1, ease: 'power1' },
			{ scrub: 5.5 }
		);
		animateWithGsap('.g_text', {
			y: 0,
			opacity: 1,
			ease: 'power2.inOut',
			duration: 1,
		});
	}, []);

	return (
		<section className='h-full bg-zinc relative overflow-hidden'>
			<div className='screen-max-wdith'>
				<div className='flex flex-col justify-center items-center overflow-hidden'>
					<div className='mb-0 px-0 common-padding'>
						<h1
							id='features_title'
							className='section-heading'
						>
							日本唯一のオーダーメイド
						</h1>
						<h2 className='text-4xl lg:text-7xl font-semibold leading-tight'>
							世界で1つの
						</h2>
						<h2 className='text-4xl lg:text-7xl font-semibold leading-tight'>
							ウォッチワインダーを
						</h2>
					</div>

					<div className='flex-center flex-col'>
						<div className='relative h-[50vh] w-full flex items-center'>
							<video
								playsInline
								id='exploreVideo'
								className='w-full h-full object-cover object-center'
								preload='none'
								muted
								autoPlay
								ref={videoRef}
							>
								<source
									src={exploreVideo}
									type='video/mp4'
								/>
							</video>
						</div>

						<div className='flex flex-col w-full relative'>
							<div className='feature-video-container'>
								<div className='overflow-hidden flex-1 h-[50vh]'>
									<img
										src={explore1Img}
										alt='titanium'
										className='feature-video g_grow'
									/>
								</div>
								<div className='overflow-hidden flex-1 h-[50vh]'>
									<img
										src={explore2Img}
										alt='titanium 2'
										className='feature-video g_grow'
									/>
								</div>
							</div>

							<div className='feature-text-container common-padding'>
								<div className='flex-1 flex-center'>
									<p className='feature-text g_text'>
										<span className='text-white'>
											熟練技術者によるハンドメイド
										</span>
										だからできる、自由自在な設計。お客様一人一人のこだわりをカタチにします。
									</p>
								</div>

								<div className='flex-1 flex-center'>
									<p className='feature-text g_text'>
										さらに、実績豊富なオーダーメイド家具会社とタイアップし、
										<span className='text-white'>
											ウォッチワインダーを組み込んだ備え付け家具
										</span>
										も承っており、大変好評頂いております。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
