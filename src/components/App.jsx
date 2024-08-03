import FriendsList   from './FriendsList.jsx';
import FormAddFriend from './FormAddFriend.jsx';
import Button        from './Button.jsx';
import FormSplitBill from './FormSplitBill.jsx';
import { useState }  from 'react';


const initialFriends = [
	{
		id     : 118836,
		name   : 'An',
		image  : 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id     : 933372,
		name   : 'Nhan',
		image  : 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id     : 499476,
		name   : 'Vinh',
		image  : 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];


export default function App() {
	const [showAddForm, setShowAddForm] = useState(false);
	const [friends, setFriends] = useState(initialFriends);
	const [selectedFriend, setSelectedFriend] = useState(null);
	
	const handleSplitBill = function (value) {
		setFriends(friends => friends.map(
				friend => friend.id === selectedFriend?.id ? { ...friend, balance: friend.balance + value }
																									 : friend));
	};
	
	return <div className="app">
		<div className="sidebar">
			<FriendsList
					friends={friends} selectedFriend={selectedFriend} onSelectFriend={setSelectedFriend}
					setShowAddForm={setShowAddForm}
			/>
			
			{showAddForm && <FormAddFriend setFriends={setFriends} setShowAddForm={setShowAddForm} />}
			
			<Button onClick={setShowAddForm}>
				{showAddForm ? 'Close form' : 'Add a friend'}
			</Button>
		</div>
		
		{selectedFriend && <FormSplitBill
				friend={selectedFriend} onSplitBill={handleSplitBill}
				setSelectedFriend={setSelectedFriend} key={selectedFriend.id} />}
	</div>;
}
