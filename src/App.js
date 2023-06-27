import './App.css';
import Playground from './components/Playground/Playground';

function App() {
  const values = [
    { id: 0, colors: [2, 1, 6, 3] },
    { id: 1, colors: [1, 1, 3, 3] },
    { id: 2, colors: [7, 2, 6, 3] },
    { id: 3, colors: [5, 1, 4, 3] },
    { id: 4, colors: [5, 1, 4, 3] },
    { id: 5, colors: [5, 1, 4, 3] },
    { id: 6, colors: [5, 1, 4, 3] }
  ];
  return (
    <div className="App">
      <Playground values={values} />
    </div>
  );
}

export default App;
