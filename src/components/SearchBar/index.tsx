import { ChangeEvent, useContext } from 'react';
import { UserContext } from 'src/context/userContext';
import { useField } from 'src/hooks/useField';
import { SearchIcon } from 'src/images/SearchIcon';
import style from './index.module.css';

export const SearchBar = () => {
  const searchInput = useField({ type: 'text' })
  const { filter } = useContext(UserContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchInput.onChange(e)
    filter(searchInput.value)

  }

  return (
    <div className={style.container}>
      <input
        className={style.search}
        type={searchInput.type}
        onChange={handleChange}
        placeholder="Search..." />
      <SearchIcon className={style.searchIcon} />
    </div>
  )
}
