import { UserList } from "./UsersList";
export const IterUser = ({users}) =>{
    return(
        <>
            {
                 users.map(user => (
                    <UserList
                    name ={user.name}
                    email={user.email}
                    id={user.id}
                    />
                 ))
            }
        </>
    )
}