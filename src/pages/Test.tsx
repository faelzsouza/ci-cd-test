import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
}


const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  ]);
  
  function apagaItens(id : number){
    setItems(items.filter(item => item.id != id ))
  }
  return (
    <div>
      <h2>Dynamic Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
            <button onClick={() => apagaItens(item.id)}>botão</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
