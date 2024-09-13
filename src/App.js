import './App.css';
import Button from './components/button';

function App() {

  const handleClick = () => {
    console.log('click');
  }

  const restartCounter = () => {
    console.log('Restart');
    
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Button 
          text= 'Click'
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button 
          text= 'Restart'
          isClickButton={false}
          handleClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
