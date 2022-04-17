import './App.css';
import Card from './components/Card';
import Form from './components/Form.js'
import Gallery from './components/Gallery';
import Settings from './components/Settings';

function App() {
  return (
    <div>
      <Form />
      <Gallery />
      <Card />
      <Settings />
    </div>
  );
}

export default App;
