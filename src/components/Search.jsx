import axios from 'axios'
import React, { useState } from 'react'

function Search({setData}) {

    const [orgName, setOrgName] = useState("")


    const handleSubmit = () => {
        axios.get(`https://api.github.com/orgs/${orgName}`).then(res => setData(res.data))
    }
    
  return (
    <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
        <input type="text" onChange={e => setOrgName(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Search