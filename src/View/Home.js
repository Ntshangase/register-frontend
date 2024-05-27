import '../Styles/Home.css';

import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {

 


  return (
    <div>
      <nav>
        <Link to='./Record'>Record</Link>
        <Link>Manage</Link>
        <Link>Students</Link>
      </nav>
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
