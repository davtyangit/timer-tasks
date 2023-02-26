import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { randomNumber } from "../../utils";
import './Items.css'

const variant = {
  initial: {
    opacity: 0,
    heigth: 0
  },
  animate: {
    opacity: 1,
    heigth: 'auto'
  },
  exit: {
    opacity: 6,
    heigth: 0
  }
}

export const Item = ({ item, onDelete, index }) => {
  const randomInteger = randomNumber(10, 30);

  const [counter, setCounter] = useState(randomInteger);
  const changeIndex = (index) => {
    return index + 1
  }

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(prev => prev - 1), 1000);
    if (counter === 0) {
      onDelete(item.id);
    }
  }, [counter]);

  return (
    <div className="list-items">
      <Reorder.Item
        value={item}
        whileDrag={{
          scale: 1.05,
          boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
        }}
        {...variant}
        className="list-items-info">

        <span className='list-items-info__number'>{changeIndex(index)}</span>
        <span className='list-items-info__text'>{item.title}</span>
        <span className='list-items-info__counter'>{counter} seconds left</span>
        <button
          className='list-items-info__delete'
          onClick={() => {
            onDelete(item.id);
          }}
        >
          Remove
        </button>

      </Reorder.Item>
    </div >
  );
};
