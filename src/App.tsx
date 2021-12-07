
import { List } from './components/List';
import { SearchBar } from './components/SearchBar';
import { SortBar } from './components/SortBar';
import { UserProvider } from './context/userContext';
import style from './index.module.css';

function App() {
  const sort = [
    { value: 'Default', name: 'Default' },
    { value: 'Name', name: 'Name' },
    { value: 'Location', name: 'Location' },
    { value: 'Email', name: 'Email' },
  ]
  return (
    <UserProvider>
      <div className={style.App}>
        <h1>My Users</h1>
        <SearchBar />
        <SortBar sort={sort} />
        <div className={style.userList}>
          <List />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
