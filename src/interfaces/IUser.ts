export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profile: string;
}

export interface IUserProvider {
  children: JSX.Element | JSX.Element[]
}

export interface IUserState {
  users: IUser[],
  filter: (value: string) => void,
  temp: IUser[],
  editUser: (user: IUser) => void,
  showModal: () => boolean,
  tempEdit: IUser,
  setTempEdit: (user: IUser) => void,
  show: boolean,
  sortBy: (value: string) => void,
}