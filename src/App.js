import './App.css';
import Accordian from './components/Accordian';
import Card from './components/Card';
import Dialogue from './components/Dialogue';
import Form from './components/Form.js'
import Gallery from './components/Gallery';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Settings from './components/Settings';
import TagCloud from './components/TagCloud';
import Search from './components/Search';

import {initialdetails} from './components/initialdetails'

function App() {
  return (
    <div>
      <h1>Sample React Components</h1>
      <h4>Author: Shaun Paul Singh</h4>
      <Navbar />
      <Login />
      <Card />
      <Form />
      <Gallery />
      
      <Settings />
      
      <Dialogue />
      <Accordian />
      <TagCloud />
      <Pagination />
      <Search details={initialdetails}/>
    </div>
  );
}

export default App;
