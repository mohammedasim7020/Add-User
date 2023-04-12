import React from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'



const AddUsers = () => {
    const handleAddUser = (event)=>{
        event.preventDefault()
    }


  return (
    <Card cssClass={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor='usernamr'>Username</label>
        <input type='text'/>
        <label htmlFor='age'>Age</label>
        <input type='text'/>
        <Button>Add User</Button>
        {/* <button>Add User</button> */}
      </form>
    </Card>
    
  )
}

export default AddUsers