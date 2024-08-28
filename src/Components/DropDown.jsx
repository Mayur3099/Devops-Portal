import React from 'react';

const DropDown = ({ bgColor, placeholderText, mainText, handleClick }) => {
	const orgs = [
		{
			'orgName': 'Plural'
		},
		{
			'orgName': 'Plutus'
		},
		{
			'orgName': 'nvojhadbfjvlband'
		}
	];

	return (
		<>
			<div className='relative text-white .comfortaa-normal'>
				<div
					className={`absolute z-[11] ${bgColor} text-xs align-text-bottom ml-4 px-1 -translate-y-1/2`}
				>
					{placeholderText}
				</div>

				<button
					className={`${bgColor} z-10 px-4 py-2 min-w-32 min-h-10 text-left font-medium border-2 border-solid border-white rounded-md hover:border-yellow-400 hover:shadow-md hover:shadow-amber-400`}
					onClick={handleClick}
				>
					{mainText}
				</button>

				<div className='mt-2 px-4 py-2 min-h-10 border-2 border-solid border-white rounded-md'>
					<ul>
						{
							orgs.map(({ orgName }) => {
								return (
									<li className='my-1 hover:text-yellow-400 hover:blur-xl hover:bg-transparent'>
										{orgName}
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</>
	)
}

export default DropDown