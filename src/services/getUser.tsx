import { IUser } from "src/interfaces/IUser";

export const getUsers = async (): Promise<IUser[]> => {
  const response = await fetch("https://randomuser.me/api/?results=50&seed=abcde");
  const { results: users } = await response.json();
  const data = users.map((u: any): IUser => ({
    name: `${u.name.first} ${u.name.last}`,
    phone: `${u.phone}`,
    email: `${u.email}`,
    id: `${u.login.uuid}`,
    address: `${u.location.city}, ${u.location.state}`,
    profile: `${u.picture.large}`
  }))

  return data
}


