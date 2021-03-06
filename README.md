
## Strategic Machines Web Analytics

A fullstack web application for real time reporting across a variety of key data stores for messaging platform

The portal to the conversational economy

## Getting Set Up

Note that the application is built on rest api integration, with react

The UI is lightweight and built mostly around bootstrap

Getting the app running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com/strategicmarket/webanalytics.git
2. install its dependencies - `npm install`
3. start the app - npm run start

This will start the webpack server for the frontend and nodejs for the db store on the back end

The code base is isomorphic, with key configuration data shared between client and server functions

The configurations for REDIS is temporarily disabled (commented out in server/http ) -- so the streaming option on the sidebar will not work

if the application opens with localhost:3000/dashboard -- go to the admin option and logout. This will render the 'login' page -- implemented as a demo with auth0 cloud service

## License and Use
 [LICENSE](.github/LICENSE.txt).

## Contributing

For details, check out [CONTRIBUTING](.github/CONTRIBUTING.md).
Strategic Machines labs and affiliates
connecting businesses with the conversational economy
