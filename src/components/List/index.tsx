import { useContext } from "react";
import { UserContext } from "src/context/userContext";
import { UserCard } from "../Card";
import { Edit } from "../Edit";

export const List = () => {
  const { filteredAndSorted, tempEdit, show } = useContext(UserContext)
  return (
    <>
      {
        filteredAndSorted.map(user => {
          return <UserCard key={user.id} {...user} />
        })
      }
      <Edit user={tempEdit} show={show} />
    </>
  )
}
