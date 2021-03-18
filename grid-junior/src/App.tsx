import './App.scss';
import Grid from './Grid/Grid'
import React from "react";

const dummy_data = 
[{content: [ {cell_content: 'gigi'},
             {cell_content: 'vasile'},
             {cell_content: 'gvasile@gmail.com'}, 
             {cell_content: '010292991'} ] },

 { content: [ {cell_content: 'coco'},
              {cell_content: 'mihai'},
              {cell_content: 'cmihai@gmail.com'},
              {cell_content: '098098098'} ]},

  {content: [ {cell_content: 'nelu'}, 
              {cell_content: 'nicu'}, 
              {cell_content: 'enicu@gmail.com'}, 
              {cell_content: '90878998'}] },

  {content: [ {cell_content: 'andrei'}, 
              {cell_content: 'duncan'},
              {cell_content: 'adcan@gmail.com'}, 
              {cell_content: '0178970192'} ] },

  {content: [ {cell_content: 'richard'}, 
              {cell_content: 'william'}, 
              {cell_content: 'rwilliam@gmail.com'}, 
              {cell_content: '879875675'} ] },
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
