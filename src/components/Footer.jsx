import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
	return (
		<footer className='py-5 sm:px-10 px-5'>
			<div className='screen-max-width'>
				<div className='text-sm'>
					<p className='font-semibold text-gray '>
						そのほかの購入方法：
						<br />
						<span className='underline text-blue'>メール</span>
						でのご注文や、銀行振込でのお支払いも可能です。
					</p>
					<p className='font-semibold text-gray '>
						電話によるご購入、ご相談は
						<span className='underline text-blue'>
							06-6471-4278
						</span>
						まで。
					</p>
				</div>

				<div className='bg-neutral-700 my-5 h-[1px] w-full' />

				<div className='flex md:flex-row flex-col md:items-center justify-between '>
					<p className='font-semibold text-gray text-xs mb-2'>
						Copright @ 2024 T'z Products All rights reserved.
					</p>
					<div className='flex flex-wrap'>
						{footerLinks.map((link, i) => (
							<p
								key={link}
								className='font-normal text-white text-xs leading-5'
							>
								{link}{' '}
								{i !== footerLinks.length - 1 && (
									<span className='mx-2'> | </span>
								)}
							</p>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
