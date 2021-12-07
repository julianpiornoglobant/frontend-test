import { useContext, useState } from 'react'
import { UserContext } from 'src/context/userContext'
import style from './index.module.css'

type Props = {
  sort: { name: string, value: string }[]
}

export const SortBar = ({ sort }: Props) => {
  const { sortBy } = useContext(UserContext)
  const [selectedValue, setSelectedValue] = useState(sort[0].value)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
    sortBy(e.target.value)
  }

  return (
    <div className={style.sort}>
      <label>Sort by </label>
      <select title="sort"
        onChange={handleChange}
        value={selectedValue}

      >
        {sort.map(({ name, value }) => (
          <option
            key={value}
            value={value}
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}