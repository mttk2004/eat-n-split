/*
 *  Project: eat-n-split
 *  File: FriendsList.jsx
 *  Created: 8:32 SA, 27/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import Friend from './Friend.jsx';


export default function FriendsList({ friends, selectedFriend, onSelectFriend, setShowAddForm }) {
	return <ul>
		{friends.map(friend => <Friend
				selectedFriend={selectedFriend} friend={friend} key={friend.id}
				onSelectFriend={onSelectFriend} setShowAddForm={setShowAddForm} />)}
	</ul>;
}
