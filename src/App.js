import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../src/navbar/Navbar'
import FormField from '../src/formField/FormField'
import CoolButton from '../src/CoolButton/CoolButton'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <FormField/>
      <CoolButton/>
    </div>
)};

export default App;