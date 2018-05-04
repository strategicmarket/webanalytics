
## Strategic Machines Web Analytics

A fullstack web application for real time reporting across a variety of key data stores for messaging platform

The portal to the conversational economy

## Getting Set Up

Note that the application is built on rest api integration, with react

The UI is lightweight and built mostly around bootstrap

Getting the app running on your local machine takes only a few steps:

1. rename the configexample directory to config. No additional keys are needed in config file beyond
default settings already included in configExample. The redis capability has been disabled. The demo showing
streaming analytics is not available with this repo
2. clone the project - `git clone https://github.com/pdhoward/chaoticdash.git
3. install its dependencies - `npm install`
4. start the app - npm run start

This will start the webpack server for the frontend and nodejs for the db store on the back end

The code base is isomorphic, with key configuration data shared between client and server functions

The configurations for REDIS is temporarily disabled (commented out in server/http )

## License and Use
 [LICENSE](.github/LICENSE.txt).

## Contributing

For details, check out [CONTRIBUTING](.github/CONTRIBUTING.md).
Strategic Machines labs and affiliates
connecting businesses with the conversational economy
