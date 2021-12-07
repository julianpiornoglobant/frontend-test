import { useContext } from 'react'
import { UserContext } from 'src/context/userContext'
import { EditUser } from 'src/images/EditUser'
import { IUser } from 'src/interfaces/IUser'
import style from './index.module.css'
export const UserCard = ({ name, address, email, phone, profile, id }: IUser) => {
  const { setTempEdit, showModal } = useContext(UserContext)

  const handleClick = () => {
    setTempEdit({ name, address, email, phone, profile, id })
    showModal()
  }

  return (
    <div className={style.card}>
      <EditUser
        className={style.edit}
        fill='#fff'
        onClick={handleClick} />
      <h2 className={style.name}>{name}</h2>
      <img className={style.profile} src={profile} alt="profile" />
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  )
}
