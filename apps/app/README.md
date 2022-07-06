Example of monorepo with Lerna and NestJS.

Libs:
- DB lib, is a global module that contains entities definition and connection to Database
- Auth lib uses global connection to DB and do something with entities

App
- /GET to test if connection to DB lib and Auth lib are working correctly 

