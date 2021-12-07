import { useContext } from 'react'
import { UserContext } from 'src/context/userContext'
import { useField } from 'src/hooks/useField'
import { IUser } from 'src/interfaces/IUser'
import style from './index.module.css'

type EditProps = {
  user: IUser,
  show: boolean
}

export const Edit = ({ user, show }: EditProps) => {
  const { editUser, showModal } = useContext(UserContext)
  const { name, address, email, phone } = user
  const inputName = useField({ type: 'text', init: name })
  const inputEmail = useField({ type: 'text', init: email })
  const inputPhone = useField({ type: 'text', init: phone })
  const inputAddress = useField({ type: 'text', init: address })

  const handleClick = () => {
    console.log(inputName.value, inputEmail.value, inputPhone.value, inputAddress.value)
    editUser({ id: user.id, name: inputName.value, email: inputEmail.value, phone: inputPhone.value, address: inputAddress.value, profile: user.profile })
    showModal()
  }
  return (
    <div className={`${style.edit} ${show ? `${style.visible}` : ''}`}>
      <h2>Edit User info</h2>
      <input type={inputName.type} value={inputName.value} onChange={inputName.onChange} placeholder="Name" />
      <input type={inputEmail.type} value={inputEmail.value} onChange={inputEmail.onChange} placeholder="Email" />
      <input type={inputPhone.type} value={inputPhone.value} onChange={inputPhone.onChange} placeholder="Phone" />
      <input type={inputAddress.type} value={inputAddress.value} onChange={inputAddress.onChange} placeholder="Address" />
      <button onClick={handleClick}>Save</button>
    </div>
  )
}
