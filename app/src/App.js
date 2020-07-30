import React from 'react';
import { CardImg } from 'reactstrap'
import './App.css';

import DailyQuote from './components/DailyQuote'

function App() {
  return (
    <div className="App">
       <CardImg style = {{width:'90%', margin:'0 auto', height:'500px'}} src={require ('./img/taylorSwiftBackground.jpg')}/>
  <DailyQuote/>
    </div>
  );
}

export default App;
