import './App.css';
import { useEffect, useState } from 'react';
import './App.css';
import data from './data.json'
import Nav from './Nav';
import List from './List';

function App() {

  let address = [...new Set(data.data.map(({Address})=>Address))];
  let category = [...new Set(data.data.map(({Category})=>Category))];

  const [loc,setLoc] = useState(address[0])
  const [cat,setCat] = useState(category[0])

  let filters= data.data.filter(obj => obj.Address == loc && obj.Category == cat)

  const[info,setInfo] = useState(filters)


  const handelLocation = (value) => {
    setLoc(value)
    let f_loc  = data.data.filter(obj => obj.Address == value && obj.Category == cat)
    setInfo(f_loc)
  }

  const handelCategory = (value) => {
    setLoc(value)
    let f_loc  = data.data.filter(obj => obj.Address == loc && obj.Category == value)
    setInfo(f_loc)
  }

  useEffect(() => {
  }, [loc,cat])
  
  return (
    <div className='App'>
      <Nav loc={address} cat={category} locChange = {handelLocation} catChange = {handelCategory} />
      {
        info.map((item) => <List item={item}/>)
      }
    </div>
  );
}

export default App;
