import React from 'react';
import { BorderOutlined } from '@ant-design/icons';

function Body() {
	return (
		<div className='page-body'>
			<div className='hero-container'>
				<div className='hero-subcon'>
					<div className='hero-text-con'>
						<div>
							<h1>The mad hatter</h1>
							<h2>UI/UX design - 001</h2>
						</div>
						<div className='icons'>
							<BorderOutlined />
							<BorderOutlined />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div className='hero-image-con'>
						<p className='lg-date'>2023</p>
						<img src="./images/hero-image.jpg" alt="" />
						<p className='sm-date'>JUNE 2023</p>
					</div>
				</div>

			</div>

			<div className='about-con'>
				<div className="about-subcon">
					<h2><span className='styled'>About</span><br />the Company</h2>
					<div className='about-text'>
						<div className='icons'>
							<BorderOutlined />
							<BorderOutlined />
						</div>
						<div className='subheading'>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<br />
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
						</div>
					</div>
				</div>
			</div>

			<div className='approach-con'>
				<div className='approach-subcon'>
					<h2><span className='styled'>Design</span> Approach</h2>
					<div className='contents'>
						<div className='intentional-content'>
							<h3><span className='styled'>001</span><br />International research</h3>
							<div className='icons'>
								<BorderOutlined />
								<BorderOutlined />
							</div>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>

						<div className='digital-content'>
							<h3><span className='styled'>002</span><br />Digital solution</h3>
							<div className='icons'>
								<BorderOutlined />
								<BorderOutlined />
							</div>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
					<div>
						<h6>Collaborate. Create. Innovate.</h6>
						<h6>Collaborate. Create. Innovate.</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Body;
