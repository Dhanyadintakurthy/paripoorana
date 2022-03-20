import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Name}</td>
      <td>{contact.Email}</td>
      <td>{contact.Mobile}</td>
      <td>{contact.DOB}</td>
      <td>{contact.JobType}</td>
      <td>
        <button
          type="add"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;