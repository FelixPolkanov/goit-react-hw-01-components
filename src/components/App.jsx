import Profile from './profile/profile'
import user from './profile/user.json'
import stats from './statistics/data.json'
import StatisticList from './statistics/StatisticList';




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
    }}
    >
      
      <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatarUrl={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
      />
    
      <StatisticList items={stats}
      />
      
       </div>
  );
};
