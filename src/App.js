import friends from './friends.json';
import user from './user.json';
import statisticalData from './statistical-data.json';
import transactions from './transaction.json';
import './App.css';
import Section from './Components/Section';
import FriendList from './Components/FriendList';
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import TransactionHistory from './Components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Section title="Friend List">
        <FriendList friends={friends} />
      </Section>
      <Section title="User Info">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload Files" stats={statisticalData} />
      </Section>
      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
