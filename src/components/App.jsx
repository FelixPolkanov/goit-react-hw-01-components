import Profile from './Profile/Profile'
import user from './Profile/user.json'

import stats from './Statistics1/data.json'
import StatisticList from './Statistics1/StatisticList';

import friends from './FriendList/friends.json'
import FriendList from './FriendList/FriendList'

import transactions from './TransactionHistory1/transactions.json'
import TransactionHistory from './TransactionHistory1/TransactionHistory'



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
    
      <StatisticList stats={stats}
      /> 

      <FriendList friends={friends}
      />

      <TransactionHistory items={transactions}
      />
      
       </div>
  );
};
