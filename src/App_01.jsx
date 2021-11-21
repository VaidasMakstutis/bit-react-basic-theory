import Hello from "./Components/Hello";

const element = <i>Hello,</i>

const data = [
  {to: 'Europe', color: 'blue', size: '44px'},
  {to: 'America', color: 'red', size: '14px'},
  {to: 'Australia', color: 'orange', size: '24px'}
]

function App() {


  return (
    <>
      <div className="App">
       
        <Hello element={element} to={'Madagascar'} color={'blue'} size={'15px'} />
        
        <Hello element={element} to={'Africa'} color={'yellow'} size={'25px'} />

        <Hello element={element} to={3+4} color={'green'} size={'30px'} />

        {
          data.map((d, i) => <Hello key={i} element={element} to={d.to} color={d.color} size={d.size}/>)
        }
      </div>
    </>
  );
}

export default App;
