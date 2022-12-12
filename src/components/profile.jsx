import PropTypes from 'prop-types';
import css from '../profile.module.css';


export default function Profile({avatarUrl, username, tag, location, followers, views, likes}) {
  return (
  <div className={css.profile}>
          <div className={css.description}>
      <img
        src={avatarUrl}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
              <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.stats_info}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.stats_info}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.stats_info}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
  )
}

Profile.prototype = {
    avatarUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

  


