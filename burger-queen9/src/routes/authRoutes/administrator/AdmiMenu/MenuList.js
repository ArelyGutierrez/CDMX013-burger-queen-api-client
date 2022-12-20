import '.././Admi.css'
import dump from '../../waiter/images/iconDelete.png'
import view from '../../waiter/images/view.png'
export const MenuList= ({name, price, type, id})=>{
    return (
        <tbody className="table-group-divider">
            <tr>
                <td><button className="col"><img src={dump} alt="Delete" id='delete'/></button></td>
                <td><button className="col"><img src={view} alt="view" id='view' /></button></td>
                <td>{name}</td>
                <td>${price}</td>
                <td>{type}</td>
                <td>{id}</td>
            </tr>
        </tbody>
    )
}