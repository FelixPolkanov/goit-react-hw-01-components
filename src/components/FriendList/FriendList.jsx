import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem'
import css from '../FriendList/friendsList.module.css';

export default function FriendList({friends}) {
    return (
       <ul className={css.friend_list}>
             {friends.map(friend => (
                    <FriendListItem key={friend.id}
                        avatar={friend.avatar}
                     name={friend.name}
                     isOnline={friend.isOnline}
                />
            ))}

        </ul>                         
     
 )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
}
))
}