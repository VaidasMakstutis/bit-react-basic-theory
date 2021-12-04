import Plate from "./Plate";
import { useEffect, useState } from "react";

function Edit({ showEdit, hideModal, editPlate, deletePlate }) {
  const [edit, setEdit] = useState({ left: 0, right: 0, id: 0 });

  useEffect(() => {
    console.log("Jau", showEdit);
    setEdit(showEdit);
  }, [showEdit]);

  const control = (e, side) => {
    const editCopy = { ...edit };
    if ("L" === side) {
      editCopy.left = parseInt(e.target.value);
    } 
    else if ("R" === side) {
      editCopy.right = parseInt(e.target.value);
    }
    setEdit(editCopy);
  };

  console.log(showEdit);

  if (showEdit.id) {
    return (
      <div className="domino_modal">
        <div className="domino_edit">
          <div className="domino_edit_close" onClick={hideModal}>
            X
          </div>
          <h2>Edit the Plate</h2>
          <div className="domino_edit_domino">
            <Plate plate={edit} />
          </div>
          <div className="domino_edit_selects">
            <select value={edit.left} onChange={(e) => control(e, "L")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select value={edit.right} onChange={(e) => control(e, "R")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <button className="button green" onClick={()=> editPlate(edit)}>Edit</button>
          <button className="button red" onClick={()=> deletePlate(edit)}>Delete</button>
        </div>
      </div>
    );
  }
  return null;
}

export default Edit;
