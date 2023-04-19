import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Nav.css'

function Nav(props) {
  const loc = props.loc
  const cat = props.cat

  let default_loc = loc[0]
  let default_cat = cat[0]

  const handleLocChange = (e) => {
    var value = e.value;
    props.locChange(value)
  }

  const handleCatChange = (e) => {
    var value = e.value;
    props.catChange(value)
  }

  return (
    <div>
      <div className='topdiv'>
        Business Directory
      </div>
      <Dropdown options={loc} onChange={handleLocChange} value={default_loc} placeholder="Select an option" />

      <Dropdown options={cat} onChange={handleCatChange} value={default_cat} placeholder="Select an option" />
    </div>
  )
}

export default Nav