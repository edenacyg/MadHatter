import React from 'react';
import Project from '.././Partials/project';
import Testimonial from '.././Partials/testimonial';
import { Circle, MyImage } from '../Components/mycomponent';

function Body() {
	return (
		<div className='page-body'>
			<div className='hero-container'>
				<div className='hero-subcon'>
					<div className='hero-text-con'>
						<div>
							<h1>The mad hatter</h1>
							<h5>UI/UX design - 001</h5>
						</div>

						<div className='icons'>
							<Circle />
							<Circle />
						</div>
						<p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>

					<MyImage verticaltext="2023" date="June 2022" animate="yes" />
				</div>

			</div>

			<div className='about-con'>
				<div className="about-subcon">
					<h2><span className='styled'>About</span><br />the Company</h2>
					<div className='about-text'>
						<div className='icons'>
							<Circle />
							<Circle />
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
								<Circle />
								<Circle />
							</div>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>

						<div className='digital-content'>
							<h3><span className='styled'>002</span><br />Digital <br /> solution</h3>
							<div className='icons'>
								<Circle />
								<Circle />
							</div>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>

					<div>
						<h4>Collaborate. Create. Innovate.</h4>
						<h4 className='subtle-heading'>Collaborate. Create. Innovate.</h4>
					</div>
				</div>
			</div>

			<div className='project-con'>
				<div className='project-subcon'>
					<h2><span className='styled'>Our</span> projects</h2>
					<div className='project-items'>
						<div className='item-con'>
							<Project projdate="June 2023" title="Project - 001" />
							<Project projdate="May 2023" title="Project - 002" />
							<Project projdate="Sep 2023" title="Project - 003" />
							<Project projdate="June 2023" title="Project - 004" />
						</div>
					</div>
				</div>


				<div className='testimonial-subcon'>
					<h2><span className='styled'>What</span> they say</h2>
					<div className='testimonial-items'>
						<div className='item-con'>
							<Testimonial />
							<Testimonial />
							<Testimonial />
							<Testimonial />
							<Testimonial />
							<Testimonial />
						</div>
					</div>
				</div>
			</div>

			<div className="design-con">
				<div className="design-subcon">
					<MyImage companyname="The mad hatter" date="JUNE 2023" animate="yes" />
					<div className="text-con">
						<div className="design-heading">
							<h2><span className='styled'>Designing for</span><br /> the future</h2>
						</div>

						<div className="description">
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

							<div className='icons'>
								<Circle />
								<Circle />
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Body;
