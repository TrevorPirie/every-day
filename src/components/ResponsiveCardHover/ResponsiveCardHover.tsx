import * as React from 'react'
import { FC } from 'react'
import './ResponsiveCardHover.css'
import jinx from '../../images/jinx_arcane.jpg'
import vi from '../../images/vi_arcane_2.webp'
import jace from '../../images/jayce_arcane.jpg'

const ResponsiveCardHover: FC = () => {
	return (
		<div className='responsive-card-body'>
			<div className='container'>
				<div className='card'>
					<div className='image-box'>
						<img src={jinx} alt='jinx' />
					</div>
					<div className='content'>
						<h2>Jinx / Powder</h2>
						<p>
							Jinx, born as Powder, is a notorious Zaun Crest icon.png Zaunite
							criminal and Vi's Vi's younger sister. When she was a little girl,
							her parents were killed in a failed uprising against Piltover
							Crest icon.png Piltover, leading Vander Vander, the upspoken
							leader of the undercity, to adopt both her and Vi Vi as his own
							daughters. After a series of events forced Jinx and her sister
							apart in more ways than one, she was fundamentally and irrevocably
							changed, transforming her into the demented killer she is today.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='image-box'>
						<img src={vi} alt='vi' />
					</div>
					<div className='content'>
						<h2>Vi</h2>
						<p>
							Vi, born as Violet, is a Zaun Crest icon.png Zaunite vigilante and
							Jinx's Jinx's older sister. A hotheaded and fearless woman who
							excels at fighting and likes to solve her problems with her fists,
							she wields a pair of powerful hextech gauntlets that can punch
							through buildings-and people-with little trouble.
						</p>
					</div>
				</div>
				<div className='card'>
					<div className='image-box'>
						<img src={jace} alt='jace' />
					</div>
					<div className='content'>
						<h2>Jayce</h2>
						<p>
							Jayce is a brilliant inventor who has pledged his life to the
							defense of Piltover Crest icon.png Piltover and its unyielding
							pursuit of progress. With his transforming hextech hammer hammer
							in hand, Jayce uses his strength, courage, and considerable
							intelligence to protect his hometown. While revered throughout the
							city as a hero, he hasn't taken well to the attention it brings.
							Still, Jayce's heart is in the right place, and even those who
							envy his natural skills are grateful for his protection in the
							City of Progress.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { ResponsiveCardHover }
