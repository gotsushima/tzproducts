import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
	const videoRef = useRef();

	useGSAP(() => {
		gsap.from('#chip', {
			scrollTrigger: {
				trigger: '#chip',
				start: '20% bottom',
			},
			opacity: 0,
			scale: 2,
			duration: 2,
			ease: 'power2.inOut',
		});

		animateWithGsap('.g_fadeIn', {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power2.inOut',
		});
	}, []);

	return (
		<section className='common-padding'>
			<div className='screen-max-width'>
				<div
					id='chip'
					className='flex-center w-full my-20'
				>
					<img
						src={chipImg}
						alt='chip'
						width={180}
						height={180}
					/>
				</div>

				<div className='flex flex-col items-center'>
					<h2 className='hiw-title'>
						安心の
						<br />
						アフターサービス
					</h2>

					<p className='hiw-subtitle'>
						1年間の製品保証はもとより、
						<br />
						末永くお使い頂く為にオーバーホール
						<br />
						などアフターサービスも万全です。
					</p>
				</div>

				<div className='mt-2 md:mt-20 mb-14'>
					<div className='relative h-full flex-center'>
						{/* <div className='overflow-hidden'>
							<img
								src={frameImg}
								alt='frame'
								className='bg-transparent relative z-10'
							/>
						</div> */}
						{/* <div className='hiw-video'> */}
							<video
								className='pointer-events-none'
								playsInline
								preload='none'
								muted
								autoPlay
								loop
								ref={videoRef}
							>
								<source
									src={frameVideo}
									type='video/mp4'
								/>
							</video>
						{/* </div> */}
					</div>
					{/* <p className='text-gray font-semibold text-center mt-3'>
						TMW00フラッグシップモデル
					</p> */}
				</div>

				<div className='hiw-text-container'>
					<div className='flex flex-1 justify-center flex-col'>
						<p className='hiw-text g_fadeIn mb-5'>
							故障しにくいように
							<span className='text-white'>日本製</span>
							の優れた部品を使い丁寧に作っておりますが、もし故障してしまった場合も
							<span className='text-white'>修理ができる</span>
							ように設計しています。
						</p>

						<p className='hiw-text g_fadeIn'>
							疑問点や不具合など、
							<span className='text-white'>
								ご遠慮なくお問い合わせくださいませ。
							</span>
							きめ細かなご対応を心がけております。
						</p>
					</div>

					<div className='flex-1 flex justify-center flex-col g_fadeIn'>
						<p className='hiw-text text-xl'>
							会員登録（無料）で
						</p>
						<p className='hiw-bigtext'>特典をプレゼント</p>
						<p className='hiw-text'>
							すぐにお使いいただける
							<span className='text-white'>5%OFFクーポン</span>、
							<span className='text-white'>国内送料無料</span>、
							<span className='text-white'>
								保証期間6ヶ月延長
							</span>
							など、お得なキャンペーン情報をお届けいたします。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
