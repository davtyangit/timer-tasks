import { Reorder } from "framer-motion";
import { Item } from "../item/Item";
import "./ItemsList.css";

export const ItemsList = ({ itemsList, setItemsList }) => {

  const onDelete = (id) => {
    setItemsList(prev => prev.filter((item) => item.id !== id));
  };

  return (
    <Reorder.Group as="ol" axis="y" values={itemsList} onReorder={setItemsList} className="items-list">
      {itemsList?.map((item, index) => {
        return <Item
          key={item.id}
          index={index}
          item={item}
          onDelete={onDelete}
          {...item}
        />;
      })}
    </Reorder.Group>
  );
};
