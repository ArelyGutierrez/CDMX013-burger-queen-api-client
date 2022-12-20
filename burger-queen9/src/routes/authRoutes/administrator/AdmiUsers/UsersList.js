import '.././Admi.css'
import dump from '../.././waiter/images/iconDelete.png'
export const UserList= ({name, email, id})=>{
    return (
        <tbody className="table-group-divider">
            <tr>
                <td><button className="col"><img src={dump} alt="Delete" id='delete'/></button></td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{id}</td>
            </tr>
        </tbody>
    )
}