import './Landing.css';

const Landing = () => {
	return (
		<>
			<section
				style={{ height: 'calc(100vh - 8rem)' }}
				className='w-screen select-none
			bg-gradient-to-b from-black to-purple-700'
			>
				<div
					className='h-full flex flex-col justify-center items-center
				
										sm:bg-blue-500
										md:bg-yellow-500
										lg:bg-red-500 lg:flex-row
										xl:bg-green-500
										2xl:bg-gray-500
				'
				>
					{/* IMAGE */}
					<div
						className='w-3/4 h-1/2 
						lg:w-full lg:h-full
							'
					>
						<img
							src='https://i.ibb.co/5xRfKDy/img3.png'
							className='w-full h-full object-contain
							lg:ml-16
							2xl:ml-32
							'
						/>
					</div>
					{/* PARAGRAPH */}
					<div
						className='w-3/4 h-1/2
					lg:h-fit lg:w-full
					'
					>
						<div
							className='neon flex flex-col items-center p-10 text-white bg-neutral-900 rounded-xl drop-shadow-2xl 
						lg:w-3/4 lg:-ml-16
						2xl:-ml-32
						'
						>
							{/*  -ml-32 mr-32 w-1/3 */}
							<span className='sm'>Unique Art Pieces</span>
							<span
								className='mt-4 text-3xl 
								2xl:text-4xl'
							>
								Cakes
								<span
									className='text-4xl text-myPurple-100
								2xl:text-5xl'
								>
									&
								</span>
								Bases
							</span>
							<p
								className='mt-4 text-center max-w-xl text-sm
								lg:max-w-md lg:text-[12px]
								xl:max-w-2xl  xl:text-[14px]
								2xl:text-[20px]
								'
							>
								Functional Art in your Table. Original pieces created with love
								creativity. Wood, painting, colors, and advanced techniques are
								collected togheter to achieve this unique art pieces.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* SECTION 2 */}
			<section
				className='w-screen h-screen bg-neutral-900 text-white bg-[url("./waves.svg")] bg-no-repeat bg-center bg-cover
			'
			>
				{/* <div
					className='relative w-full h-[300px]
						'
				>
					<img
						className='w-full h-full object-cover absolute'
						src='https://i.ibb.co/wrh0PzQ/pexels-pixabay-355288.jpg'
						alt=''
					/>
				</div> */}
				<div className='container h-[80%] text-center flex flex-col items-center justify-between'>
					<div className='mt-10 text-5xl'>Match Your Style</div>
					<div className='w-1/2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
						distinctio cupiditate nemo magnam nihil ducimus fugiat quis eius.
						Sunt, corporis..
					</div>
					<div className='h-[500px] w-full grid grid-cols-4  text-black'>
						<div className='relative col-start-2 col-end-3'>
							<img
								src='https://i.ibb.co/CtXQJ85/tinywow-JKGF5937-4878074.png'
								className='absolute w-full h-full object-contain
								duration-1000 hover:rotate-45 hover:scale-150
							'
							/>
						</div>
						<div className='relative col-start-4 col-end-5'>
							<img
								src='https://i.ibb.co/YpzN1m0/tinywow-IMG-E2967-4878085.png'
								className='absolute w-full h-full object-contain
								duration-1000 hover:rotate-45 hover:scale-150
							'
							/>
						</div>
						<div className='relative'>
							<img
								src='https://i.ibb.co/fS9Hhct/IMG-E6377.png'
								className='absolute w-full h-full object-contain
								duration-1000 hover:rotate-45 hover:scale-150
							'
							/>
						</div>
						<div className='relative col-start-3 col-end-4'>
							<img
								src='https://i.ibb.co/Zm4NwTb/tinywow-IMG-1367-4878105.png'
								className='absolute w-full h-full object-contain duration-1000 hover:rotate-45 hover:scale-150
							'
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='w-screen bg-neutral-900 text-white h-[748px] '>
				<div className='relative w-screen h-3/4 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-500'>
					<img
						src='https://i.ibb.co/T0K0TPt/lucas-kapla-w-QLAGv4-OYs-unsplash.jpg'
						alt=''
						className='w-full h-full object-cover absolute mix-blend-overlay'
					/>

					<div className='w-4/5 h-4/5 flex flex-col items-center justify-evenly z-10'>
						<div className='mx-auto'>
							<span className='w-20 h-20 flex items-center justify-center border-2 rounded-full bg-gradient-to-b from-black to-blue-900 '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-14 h-14'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
							</span>
						</div>
						<span className='text-5xl'>Let Your Senses Be Your Guide</span>
						<p className='text-center'>
							Colors are mixed togheter to create the most marvlus pieces that
							you will be able to enjoy every day in your table. This is called
							Functional Art. Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Voluptatibus nemo odit blanditiis sed provident
							quo, corporis consequuntur nesciunt voluptates iusto magnam rem
							perferendis ullam temporibus amet praesentium error asperiores
							ipsum.
						</p>
					</div>
				</div>
			</section>

			{/* CREATION PROCESS */}
			<section className='w-screen bg-neutral-900 text-white h-[954px]'>
				<div className='container grid grid-cols-2 gap-1'>
					<div
						className='relative h-[954px] flex flex-col items-center
						bg-gradient-to-bl from-gray-900 to-slate-400
						'
					>
						{/* <img
							src='https://i.ibb.co/gRr1Rhh/IMG-E3278-2.jpg'
							alt=''
							className='w-full h-full object-cover absolute mix-blend-overlay'
						/> */}
						<img
							src='https://i.ibb.co/hB1BYgR/pexels-cottonbro-5089159.jpg'
							alt=''
							className='w-full h-full object-cover absolute mix-blend-overlay'
						/>
						<span className='border-2 bg-gradient-to-b from-black to-purple-500 p-4 rounded-full mt-10'>
							<svg
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-10 h-10'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
								/>
							</svg>
						</span>
						<span className='mt-10 text-sm tracking-[5px]'>
							HOW DO WE DO IT?
						</span>
						<span className='text-4xl w-3/4 text-center mt-10'>
							Finest carpentry work
						</span>
					</div>
					<div
						className='relative h-[954px] flex flex-col items-center
						bg-gradient-to-br from-gray-900 to-slate-400
						'
					>
						<img
							src='https://i.ibb.co/9w9wyZX/pexels-daian-gan-102127.jpg'
							alt=''
							className='w-full h-full object-cover absolute mix-blend-overlay'
						/>
						<span className='border-2 bg-gradient-to-b from-black to-purple-500 p-4 rounded-full mt-10'>
							<svg
								width='42'
								height='42'
								fill='currentColor'
								className='bi bi-palette'
								viewBox='0 0 16 16'
							>
								<path d='M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
								<path d='M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z' />
							</svg>
						</span>
						<span className='mt-10 text-sm tracking-[5px]'>A PIECE OF ART</span>
						<span className='text-4xl w-5/4 text-center mt-10'>
							Intervention of artists internationally reconized
						</span>
					</div>
				</div>
			</section>

			{/* Suscribe */}
			<section
				className='w-screen bg-neutral-900 text-white h-[444px]
			'
			>
				<div className='container max-w-5xl pt-20'>
					<div className='mx-auto w-3/4 text-center text-[50px] font-light'>
						Subscribe and Get 15% Off Your First Purchase
					</div>
					<div className='h-[200px] px-10'>
						<span className=''>Email *</span>
						<div className='flex items-center'>
							<input
								type='text'
								placeholder='Sign up here'
								className='relative w-full p-4 rounded-full mt-4 text-black'
							/>
							<button className='btn btn-purple hover:btn-purple -ml-36 mt-4 z-10'>
								Subscribe
							</button>
						</div>
						<div className='text-center text-sm mt-4'>
							Thanks for submitting!
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<section className='w-screen bg-neutral-900 text-white text-xs h-[400px] pt-48'>
				<div className='container '>
					<div className='grid grid-cols-2 h-[72px] gap-20 p-5'>
						<div className='mx-auto flex items-center gap-10'>
							<span>Instagram</span>
							<span>Facebook</span>
							<span>TikTok</span>
							<span>Whatsapp</span>
						</div>
						<div className='mx-auto flex items-center gap-10'>
							<span>Terms & Conditions</span>
							<span>Shipping & Returns</span>
							<span>Privacy Policy</span>
						</div>
					</div>
					<hr className='w-3/4 mx-auto ' />
					<div className='grid grid-cols-2 h-[100px] gap-20 p-5'>
						<span className='mx-auto'>© 2023 Cakes&Bases</span>
						<span className='mx-auto'>Imagenes</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Landing;
