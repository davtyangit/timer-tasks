import { useState } from "react";
import { ItemsList } from "./components/items-list/ItemsList";
import { AddItem } from "./components/add-item/AddItem";
import { AppHeader } from './components/app-header/AppHeader'
import "./App.css";

function App() {
  const [values, setValues] = useState("");
  const [itemsList, setItemsList] = useState([
    { id: 1, title: 'first task' },
    { id: 2, title: 'second task' },
    { id: 3, title: 'third task' },
  ]);

  const addItem = () => {
    setItemsList([
      ...itemsList,
      {
        id: Math.ceil(Math.random() * 1000),
        title: values,
      },
    ]);
    setValues("");
  };

  return (
    <div className="wrapper">
      <div className='container'>
        <AppHeader />
        <AddItem
          addItem={addItem}
          itemsList={itemsList}
          setItemsList={setItemsList}
          values={values}
          setValues={setValues}
        />
        <ItemsList itemsList={itemsList} setItemsList={setItemsList} />
      </div>
    </div>
  );
}

export default App;
