import './App.scss';
import Grid from './Grid/Grid'

import GridHeaderProvider from './Grid/GridContext/GridHeaderContext';

const viewPartItems = [
  'First View',
  'Second View',
  'Third View'
] 

function App(){
    return (
      <div className="App">
        <Grid items={viewPartItems}/>
      </div>
    );
}

export default App;
