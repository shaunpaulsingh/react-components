import './App.css';
import Accordian from './components/Accordian';
import Card from './components/Card';
import Dialogue from './components/Dialogue';
import Form from './components/Form.js'
import Gallery from './components/Gallery';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import TagCloud from './components/TagCloud';

function App() {
  return (
    <div>
      <h1>Sample React Components</h1>
      <h4>Author: Shaun Paul Singh</h4>
      <Navbar />
      <Form />
      <Gallery />
      <Card />
      <Settings />
      <Login />
      <Dialogue />
      <Accordian />
      <TagCloud />
    </div>
  );
}

export default App;
