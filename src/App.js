import { Header } from './Header';
import {Content} from './Content';
import { Footer } from './Footer';
import { useState } from 'react';
import { AddItem } from './AddItem';
import { SearchItem } from './SearchItem';


function App() {
   const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")))

  const [newItem,setnewItem] = useState('')

  const [search,setSearch] = useState('')

  const addItem = (product) =>{
    const id = items.length? items[items.length - 1].id + 1 : 1
    const addNewItem = {id, checked:false, product}
    const listItems =[...items, addNewItem]
    setItems(listItems)
    console.log(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleChange = (id) =>{
    const listItems = items.map ((item) =>
    item.id ===id? {...item,checked:!item.checked}: item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) =>{
    const listItems = items.filter ((item) =>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleSubmit = (e) =>{
    e.preventDefault( )
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setnewItem('')
  }
  

  return (
    <div className="App">
      
      <Header title ="useref-hook"/>
      <AddItem
      newItem = {newItem}
      setnewItem ={setnewItem}
      handleSubmit ={handleSubmit}/>
      <SearchItem
      search = {search}
      setSearch = {setSearch}/>
      <Content 
      items ={items.filter((item) =>((item.product).toLowerCase()).includes (search.toLowerCase()))}
      setItems ={setItems}
      handleChange ={handleChange}
      handleDelete ={handleDelete}
      />
      <Footer
      length ={items.length}/>
      
    </div>
  );
}

export default App;
