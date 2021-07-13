# jm-grid-implementation

Demonstrative project, used to showcase **custom-grid-jm** implementation into another react application.
Mainly contains the implemented https://github.com/cipriRusu/custom-grid-jm component, with additional aid components which can edit the Grid on the spot. (SideBar and ToggleSideBar).

All the data inside this version is generated using Faker which is loaded inside the DataSource object at loadtime (Data will be generated according to existing headers).
All the data operations (filter, sort, paging) are done on the client side inside the DataSource for demonstration purposes.

https://github.com/cipriRusu/jm-grid-implementation/tree/grid-backend-support branch contains a slightly modified version of the application and the https://github.com/cipriRusu/custom-grid-jm component, which supports async calls inside the Get/GetTotal methods of the DataSource object.

A working online version of this application can be found on gitpages at: https://ciprirusu.github.io/grid-deployed/
