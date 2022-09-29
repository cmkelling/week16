
import React, { useState } from "react";

const Item = ({ budgetItem }) => {
  const [edit, setEdit] = useState(false);
  const [budget] = useState(budgetItem)

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="budget" key={budgetItem.id}>
        {!edit ? (
            <>
                <span>{budgetItem.firstName}</span>
                <span>{budgetItem.total}</span>
                <span>{budgetItem.plane}</span>
                <span>{budgetItem.hotel}</span>
                <span>{budgetItem.tickets}</span>
                <span>{budgetItem.hopperGenieLane}</span>
                <span>{budgetItem.food}</span>
                <span>{budgetItem.souvenirs}</span>
                <button onClick={handleEdit}>
                    Edit
                </button>
            </>  
        ) : (
            <>
                <input type='text' value={budget} name='budget'/>
                <button onClick={handleEdit}>Cancel</button>
                <button type="submit">
                    Save
                </button>
            </>
        )}
    
    </div>
  );
};

export default Item;