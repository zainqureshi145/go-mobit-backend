# Go Mobit FullStack Developer Test
## Backend API

I have made the backend API on Node/Express

## Database

I have used MySQL Database

# Setup

Create a .env file with the following:
```bash
NODE_ENV=development
PORT=5000
DATABASE_USER=YOUR_USERNAME_HERE
DATABASE_PASS=YOUR_PASSWORD_HERE
```

After that run:
```bash
npm install
```

and finally, to run the server, navigate to the same directory as of server.js and run this command on the terminal:
```bash
npm start
```
you should be able to see the following logs on the terminal window:
```bash
Server is listening on port 5000 (or 3000)
Database Connected!
```

## Endpoints

There is one endpoint:
```bash
http://localhost:5000/users
```

## Rest API Methods GET and POST

Using postman or thunder client on VS CODE we can test the API endpoint usin GET and POST Methods.
The Get Method should return all users in the database, and by using POST Method, we can create new users.