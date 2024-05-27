import '../Styles/Home.css';

import React from 'react';
import Navbar from '../Model/Navbar';

export default function Home() {

 


  return (
    <div>
      <Navbar/>
      <h2>Welcome to student register application</h2>
      <div>
        <button>Create</button>
        <button>Read</button>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
