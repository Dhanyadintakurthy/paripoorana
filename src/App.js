import React, { useState , Fragment} from 'react';
import './App.css';
import { nanoid } from "nanoid";
import data from './data.json';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    DOB: "",
    Mobile: "",
    Email: "",
    JobType:"",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    DOB: "",
    Mobile: "",
    Email: "",
    JobType:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("Name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Mobile: addFormData.Mobile,
      JobType: addFormData.JobType,
      Email: addFormData.Email,
      DOB: addFormData.DOB,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Mobile: editFormData.Mobile,
      JobType: editFormData.JobType,
      Email: editFormData.Email,
      DOB: addFormData.DOB,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Mobile: contact.Mobile,
      JobType: contact.JobType,
      DOB: contact.DOB,
      Email: contact.Email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleAddFormSubmit}>
        <fieldset>
          <legend>Registration</legend>
          <div className='column'>
            <div className='row1'>
              <div>
                <label>Fullname </label>
                <input type="text" name='Name' required="required" placeholder='fullname' onChange={handleAddFormChange}></input>
              </div>
              <div>
                <label>Mobile </label>
                <input type="tel" name='cc' required="required" placeholder='country code' onChange={handleAddFormChange}></input>
                <input type="tel" name='Mobile' required="required" placeholder='ph.no:' onChange={handleAddFormChange}></input>
              </div>
              <div>
                <label>Job Type</label>
                <select onChange={handleAddFormChange}>
                  <option value="0">Consultant</option>
                  <option value="1">PT</option>
                  <option value="2">FT</option>
                </select>
              </div>
              <div>
                <label>pref Location </label>
                <input type="checkbox"></input>
                <label>Chennai</label>
              </div>
            </div>
            <div className='row2'>
              <div>
                <label>Profile Pic </label>
                <input type="file" name='pic' accept='image/*' placeholder=''></input><br></br>
              </div>
              <div>
                <label>Email id </label>
                <input type="Email" name='Email' required="required" placeholder='Email' onChange={handleAddFormChange}></input><br></br>
              </div>
              <div>
                <label>DOB</label>
                <input type="date" onChange={handleAddFormChange}></input>
              </div>
              <div className='button'>
                <button type="add" value="add">add</button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      <table onSubmit={handleEditFormSubmit}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Job Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {Contacts.map((contact) => (
            <tr>
              <td>{contact.Name}</td>
              <td>{contact.Email}</td>
              <td>{contact.Mobile}</td>
              <td>{contact.DOB}</td>
              <td>{contact.JobType}</td>
              <td></td>
            </tr>
          ))} */}
          {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
