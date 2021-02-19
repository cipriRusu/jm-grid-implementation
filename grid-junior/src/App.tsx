import './App.scss';
import Grid from './Grid/Grid'
import GridProvider from './Grid/GridContext/GridContext';

const viewPartItems = [
  'First View',
  'Second View',
  'Third View'
] 

function App(){
    return (
      <div className="App">
        <GridProvider>
          <Grid items={viewPartItems}/>
        </GridProvider>
      </div>
    );
}

export default App;
