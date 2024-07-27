/*
 *  Project: eat-n-split
 *  File: FormAddFriend.jsx
 *  Created: 8:48 SA, 27/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */


import Button       from './Button.jsx';
import { useState } from 'react';


export default function FormAddFriend({ setFriends, setShowAddForm }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	
	const handleSubmit = function (e) {
		e.preventDefault();
		
		if (!name || !image) return;
		
		const id = crypto.randomUUID();
		const newFriend = { id, name, image, balance: 0 };
		
		setFriends(friends => [...friends, newFriend]);
		setImage('');
		setName('');
		setShowAddForm(false);
	};
	
	return <form className="form-add-friend" onSubmit={handleSubmit}>
		<label>🫡Friend name</label>
		<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
		
		<label>🖼️Image URL</label>
		<input type="text" value={image} onChange={e => setImage(e.target.value)} />
		
		<Button>Add</Button>
	</form>;
}
