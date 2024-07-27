/*
 *  Project: eat-n-split
 *  File: Button.jsx
 *  Created: 8:46 SA, 27/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */


export default function Button({ children, onClick }) {
	return <button className="button" {...(onClick && { onClick: () => onClick(is => !is) })}>
		{children}
	</button>;
}
