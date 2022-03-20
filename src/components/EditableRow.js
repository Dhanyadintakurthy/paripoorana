import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Email"
          required="required"
          placeholder="Enter an email..."
          name="Email"
          value={editFormData.Email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="teL"
          required="required"
          placeholder="Enter a phone number..."
          name="Mobile"
          value={editFormData.Mobile}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter an date..."
          name="DOB"
          value={editFormData.DOB}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;