import './App.scss';
import Grid from './Grid/Grid'
import React from "react";

const viewPartItems = [
  'First View',
  'Second View',
  'Third View'
];

const dummy_data = [
  { 'prenume': 'gigi', 
    'nume': 'vasile', 
    'email':'gvasile@gmail.com', 
    'telefon': '010292991' },

  { 'prenume': 'coco', 
    'nume': 'mihai', 
    'email':'cmihai@gmail.com', 
    'telefon': '098098098' },

  { 'prenume': 'nelu',
    'nume': 'nicu',
    'email': 'enicu@gmail.com',
    'telefon': '90878998'}
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
        <Grid items={dummy_data} 
              headers={headers} />
      </div>  
    );
}

export default App;
