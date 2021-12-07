import { createContext } from 'react'
import { useUser } from 'src/hooks/useUser'
import { IUserProvider, IUserState } from 'src/interfaces/IUser'

export const UserContext = createContext<IUserState>({} as IUserState)

export function UserProvider({ children }: IUserProvider) {
  const { users, filter, temp, editUser, showModal, tempEdit, setTempEdit, show } = useUser()
  return (
    <UserContext.Provider value={{ users, filter, temp, editUser, showModal, tempEdit, setTempEdit, show }}>
      {children}
    </UserContext.Provider>
  )
}
