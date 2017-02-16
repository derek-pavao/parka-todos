# ParkaTodos
Sorry I'm not very original (Blame my parents for not taking me to Disney). 
Your example is an api for a Todos app.

## Getting Started

#### Install sqlite3 on your machine 
For Brew users on OSX:
```bash
$ brew install sqlite3
```
for everyone else... Sorry, but google is your friend.

#### Install a few global npm dependencies
```bash
$ npm install -g typescript parka ts-node nodemon
```

#### Install local dependencies
```bash
$ npm install
```

#### Start the development server
```bash
$ parka start ./src/application.ts ./src/config.yml
```

Your server should be running on http://localhost:3000

http://localhost:3000/todo should return you the list of Todos in the database
