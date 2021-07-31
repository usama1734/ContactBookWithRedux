import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'
import {deleteContact} from '../../actions/ContactAction'
import {useDispatch} from 'react-redux'

const Contact = (props) => {
  const dispatch = useDispatch();
  return (
    <tr>
    <th scope="row">
        <div className="custom-control custom.checkbox">
            <input checked={props.selectAll}
                type="checkbox"
                className="custom-control-input" />
            <label className="custom-control-label">
            </label>
        </div>
    </th>
    <td><Avatar  name={props.contact.name} size="45" round={true} /><span className="mx-2">{props.contact.name}</span></td>
    <td>{props.contact.phone}</td>
    <td>{props.contact.email}</td>
    <td><Link to={`/contacts/edit/${props.contact.id}`}><span className="material-icons">edit</span></Link>
    <span className="material-icons text-danger" onClick ={() => dispatch(deleteContact(props.contact.id))}>remove_circle</span></td>
</tr>
  )
}

export default Contact
