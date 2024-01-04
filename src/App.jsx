import Player from './components/Player.jsx';
import Timerchallenge from './components/Timerchallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timerchallenge title="Easy" targetTime={1} />
        <Timerchallenge title="Medium" targetTime={5} />
        <Timerchallenge title="Hard" targetTime={10} />
        <Timerchallenge title="Pro" targetTime={20} />
      </div>
    </>
  );
}

export default App;
