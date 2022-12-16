import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem'
import css from '../FriendList/friendsList.module.css';

export default function FriendList({friends}) {
    return (
       <ul className={css.friend_list}>
             {friends.map(({id,avatar, name,isOnline}) => (
                    <FriendListItem key={id}
                        avatar={avatar}
                     name={name}
                     isOnline={isOnline}
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