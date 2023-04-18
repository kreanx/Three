import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((item, i) => {
				return (
					<div key={i} className="w-28 h-28">
						<BallCanvas icon={item.icon} />
					</div>
				)
			})}
		</div>
	)
}

export default Tech
