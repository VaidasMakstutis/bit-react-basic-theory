import SmallSquare from "./Components/SmallSquare";
import digitSquares from "./Data/digitSquares";

function App() {
  return (
    <div className="App">
      <div className="big-blue">
        <SmallSquare color={'crimson'} number={5}/>
        <SmallSquare color={'orange'} number={7}/>
        <SmallSquare color={'lime'} number={8}/>
        <SmallSquare color={'brown'} number={19}/>
      </div>
      <div className="big-blue">
          {
              digitSquares.map((s, i) => <SmallSquare key={i} color={s.color} number={s.number} />)
          }
            
      </div>
    </div>
  );
}

export default App;
