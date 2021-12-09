import { createContext } from 'react'
import { useUser } from 'src/hooks/useUser'
import { IUserProvider, IUserState } from 'src/interfaces/IUser'

export const UserContext = createContext<IUserState>({} as IUserState)

export function UserProvider({ children }: IUserProvider) {
  const { users, filter, filteredAndSorted, editUser, showModal, tempEdit, setTempEdit, show, sortBy } = useUser()
  return (
    <UserContext.Provider value={{ users, filter, filteredAndSorted, editUser, showModal, tempEdit, setTempEdit, show, sortBy }}>
      {children}
    </UserContext.Provider>
  )
}
