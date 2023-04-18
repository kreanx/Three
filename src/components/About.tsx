import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
/* eslint-disable react/no-unknown-property */

const ServiceCard: React.FC<any> = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt="title" className="w-16 h-16 object-contain" />
					<h3 className="text-white font-bold text-center text-[20px]">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0.2)}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
			>
				Hi there, my name is Nikita! I&apos;m a developer who specializes in
				JavaScript, TypeScript, and React. I take pride in writing clean and
				efficient code, and I always make sure to write thorough unit tests to
				ensure that my code works as intended. In addition to coding, I also
				have experience working with components on Storybook, which is a useful
				tool for developing and testing UI components in isolation. Overall,
				I&apos;m a dedicated and passionate developer who is always looking for
				new challenges and opportunities to grow.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => {
					return <ServiceCard key={service.title} index={index} {...service} />
				})}
			</div>
		</>
	)
}

export default SectionWrapper(About, 'about')
