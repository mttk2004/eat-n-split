/*
 *  Project: eat-n-split
 *  File: Friend.jsx
 *  Created: 8:34 SA, 27/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */


import Button from './Button.jsx';


export default function Friend({ friend, selectedFriend, onSelectFriend, setShowAddForm }) {
	const selected = selectedFriend && selectedFriend.id === friend.id;
	return <li className={selected ? 'selected' : ''}>
		<img src={friend.image} alt={friend.name} />
		<h3>{friend.name}</h3>
		
		{friend.balance > 0 && <p className="green">{friend.name} owns you ${friend.balance}!</p>}
		{friend.balance < 0 && <p className="red">You own {friend.name} ${Math.abs(
				friend.balance)}!</p>}
		{friend.balance === 0 && <p>You and {friend.name} are even!</p>}
		
		<Button
				onClick={() => onSelectFriend(s => {
					setShowAddForm(false);
					return s?.id === friend.id ? null : friend;
				})}>{selected ? 'Close' : 'Select'}</Button>
	</li>;
}
