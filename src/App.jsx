import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, navigate } from '@reach/router';
import Swapi from './components/Swapi';

function App() {

  const [query, setQuery] = useState({
    selection: "default",
    id: 0,
  })
  
  const { selection, id } = query;
  
  const handleForm = e => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/${selection}/${id}`)
  }

  return (
    <div className='container text-center'>
      <h1 className="mx-auto my-4">Welcome to the Star Wars API</h1>
      <div className="row ">
        <form className="col-6 mx-auto d-flex justify-content-around my-4" onSubmit={handleSubmit}>
          <label className="font-weight-bold mt-2" htmlFor="selection">Search for:</label>
          <select name="selection" id="selection" onChange={handleForm}>
            <option className="dropdown-item" value="default">-- Select --</option>
            <option className="dropdown-item" value="people">People</option>
            <option className="dropdown-item" value="planets">Planet</option>
          </select>
          <label className="font-weight-bold mt-2" htmlFor="id">ID:</label>
          <input className="col-2" type="number" name="id" id="id" value={id} onChange={handleForm} />
          <input className="btn btn-primary btn-outline-dark font-weight-bold text-light" type="submit" value="Seach" />
        </form>
      </div>
      <Router>
        <Swapi path="/:selection/:id"/>
      </Router>
    </div>
  );
}

export default App;
