import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import React from "react";
type Props = {
  items: any;
  editItems: any;
  deleteItems: any;
};
const List = ({ items, editItems, deleteItems }: Props) => {
  return (
    <div>
      {items.map((item: any) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="grocery-title">{title}</p>
            <div className="icon-container">
              <FaEdit className="edit" onClick={() => editItems(id)} />
              <MdDelete className="delete" onClick={() => deleteItems(id)} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
