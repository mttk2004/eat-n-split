/*
 *  Project: eat-n-split
 *  File: FormSplitBill.jsx
 *  Created: 8:56 SA, 27/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import Button       from './Button.jsx';
import { useState } from 'react';


export default function FormSplitBill({ friend, onSplitBill, setSelectedFriend }) {
	const [billValue, setBillValue] = useState('');
	const [userPaid, setUserPaid] = useState('');
	const [whoPaying, setWhoPaying] = useState('user');
	
	const handleSubmit = function(e) {
		e.preventDefault()
		
		if (!billValue || !userPaid) return
		
		onSplitBill(whoPaying === 'user' ? billValue - userPaid : -userPaid)
		setSelectedFriend(false)
	}
	
	return <form className="form-split-bill" onSubmit={handleSubmit} >
		<h2>Split bill with {friend.name}</h2>
		
		<label>🤑Bill value</label>
		<input type="number" value={billValue} onChange={e => setBillValue(Number(e.target.value))} />
		
		<label>🫵Your expense</label>
		<input type="number" value={userPaid} onChange={e => setUserPaid(
				Number(e.target.value) > billValue ? userPaid : +e.target.value)} />
		
		<label>🫡{friend.name}'s expense</label>
		<input type="number" value={billValue - userPaid} disabled />
		
		<label>🤔Who is paying the bill?</label>
		<select value={whoPaying} onChange={e => setWhoPaying(e.target.value)}>
			<option value="user">You</option>
			<option value="friend">{friend.name}</option>
		</select>
		
		<Button>Split bill</Button>
	</form>;
}
