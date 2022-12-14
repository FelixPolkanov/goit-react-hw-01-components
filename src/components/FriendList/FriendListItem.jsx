import PropTypes from 'prop-types';
import css from '../FriendList/friendsList.module.css';


export default function FriendListItem({ avatar, name, isOnline }) {
    return (

        <li className={css.item}>

            <span className={css.status} 
                style={{ backgroundColor: getActiveColor({ isOnline } ) }}></span>
                    <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

 FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline : PropTypes.bool.isRequired,

}

function getActiveColor(isOnline) {
    if (isOnline ) {
    return 'green'
}
    return 'red'
  
}