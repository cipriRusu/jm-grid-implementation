import './App.scss';
import Grid from './Grid/Grid'
import React from "react";

const dummy_data = 
[
  {'Prenume': 'gigi',
  'Nume': 'vasile',
  'Email': 'gvasile@gmail.com',
  'Nr Telefon': '010292991' },
  
 {'Prenume': 'nelu',
  'Nume': 'nicu',
  'Email': 'enicu@gmail.com',
  'Nr Telefon': '90878998' },
  
 {'Prenume': 'andrei',
  'Nume': 'duncan',
  'Email': 'adcan@gmail.com',
  'Nr Telefon': '010292991' },
  
 {'Prenume': 'richard',
  'Nume': 'william',
  'Email': 'rwilliam@gmail.com',
  'Nr Telefon': '879875675' }
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
          'size': 'standard',
          'type': 'number'}
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
         'size':'standard',
         'type': 'date'}, 
         {'name':'Urgenta',
         'size':'standard'}, 
         {'name':'Termen Limita',
          'size':'standard',
          'type': 'date'}
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
        <Grid items={dummy_data} headers={headers} />
      </div>  
    );
}

export default App;
