import React from 'react'
import Form from '../Form/Form'
import FormProducto from '../Form/FormProducto'

function Dashboard() {
  return (
    <div className='flex justify-around'>
      <Form/>
      <FormProducto/>
      
    </div>
  )
}

export default Dashboard