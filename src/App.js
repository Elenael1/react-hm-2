import './App.css';
import { Button } from './Button';
import { Greeting } from './Greeting';
import { Message } from './Message';

function App() {
  return (
    <div >
     <Greeting name="Elena"/>
     <Message text="Nice to meet you"/>
     <Button onClick={(e) => console.log("You clicked the button")}/>
    </div>
  );
}

export default App;
