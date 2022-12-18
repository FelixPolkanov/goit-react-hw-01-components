import Profile from './Profile/Profile'
import user from './Profile/user.json'

import stats from './Statistics/data.json'
import StatisticList from './Statistics/StatisticList';

import friends from './FriendList/friends.json'
import FriendList from './FriendList/FriendList'

import transactions from './TransactionHistory/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'



export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
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
          stats={user.stats}
      />
    
      <StatisticList stats={stats} title='Upload stats' 
      /> 

      <FriendList friends={friends}
      />

      <TransactionHistory items={transactions}
      />
      
       </div>
  );
};
