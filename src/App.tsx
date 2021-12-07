
import { List } from './components/List';
import { SearchBar } from './components/SearchBar';
import { UserProvider } from './context/userContext';
import style from './index.module.css';

function App() {

  return (
    <UserProvider>
      <div className={style.App}>
        <h1>My Users</h1>
        <SearchBar />
        <div className={style.userList}>
          <List />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
