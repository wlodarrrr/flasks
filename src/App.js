import './App.css';
import Playground from './components/Playground/Playground';
import Game from './domain/Game';

function App() {
  let game = new Game();
  game.reset(14,2);
  return (
    <div className="App">
      <Playground game = {game} />
    </div>
  );
}

export default App;
