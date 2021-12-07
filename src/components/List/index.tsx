import { useContext } from "react";
import { UserContext } from "src/context/userContext";
import { UserCard } from "../Card";
import { Edit } from "../Edit";

export const List = () => {
  const { temp, tempEdit, show } = useContext(UserContext)
  return (
    <>
      {
        temp.map(user => {
          return <UserCard key={user.id} {...user} />
        })
      }
      <Edit user={tempEdit} show={show} />
    </>
  )
}
