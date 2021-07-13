# jm-grid-implementation

#### This is an experimental branch, will not be used for presentation/demo purposes ####

This repository contains a slightly modified version of the https://github.com/cipriRusu/jm-grid-implementation/tree/in-memory-data-grid branch 
and https://github.com/cipriRusu/custom-grid-jm component, which supports async await calls inside the Get/GetTotal methods of the IDataSource implementation.

All Get/GetTotal calls inside the Grid component have been updated to suport async/await syntax, allowing to make calls to external API's.

The repository also contains a small node server, intended to replicate a proper API, all the data sorting/filtering/paging logic from 
https://github.com/cipriRusu/jm-grid-implementation/tree/in-memory-data-grid being moved inside it to replicate a proper use case.
