import './App.scss';
import Grid from './Grid/Grid'

const viewPartItems = [
  'First View',
  'Second View',
  'Third View'
]

const headers = 
[
  {'name': 'firstHeader',
   'headers': 
   [
     {'name': 'Utilizator',
      'columns': 
      [
        {'name': 'Prenume',
         'size': 'standard'},
        {'name': 'Nume',
         'size': 'standard'}
      ]
    },
      {'name': 'Detalii', 
       'columns': 
       [
         {'name':'Email',
          'size':'standard'}, 
         {'name':'Nr Telefon',
          'size': 'standard'}
      ]}]
  },
  {
    'name': 'secondHeader',
    'headers':
    [
      {'name': 'Examinare',
       'columns': 
       [
         {'name':'Status', 
          'size':'standard'}, 
         {'name': 'Data',
         'size':'standard'}, 
         {'name':'Urgenta',
         'size':'standard'}, 
         {'name':'Termen Limita',
          'size':'standard'}
       ]},
      {'name': 'Detalii Examinare', 
       'columns': 
       [
         {'name':'Tip', 
          'size':'standard'}, 
         {'name':'Centru Imagistica',
          'size':'standard'}, 
         {'name':'Rezultate', 
          'size':'thin'}, 
         {'name':'Imagini',
          'size':'thin'}
       ]}
    ]
  }
]

function App(){
    return (
      <div className="App">
        <Grid items={viewPartItems} 
              headers={headers} />
      </div>  
    );
}

export default App;
