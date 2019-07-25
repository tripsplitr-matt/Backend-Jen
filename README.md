BackEnd Repository for the TripSpltr build week team
Base URL
https://tripsplitr.herokuapp.com

AUTHORIZATION ROUTES
POST to /auth/register

expects name, username, password, and email in the req.body
POST to /auth/login

expects username and password in the req.body,
outputs a token and welcome message

USER ROUTES:

GET to /users

expects token for authorization
outputs an array of users

GET to /users/:id

expects token for authorization
outputs user with the specified ID

DELETE to /users/:id

outputs message confirming deletion of user

POST to /users/:id

outputs message confirming addition of new user

PUT to /users

outputs user with updated information

TRIP ROUTES:

GET to /trips

expects token for authorization
outputs an array of all the experiences available, with all their data

GET to /trips/:id

expects token for authorization
outputs an trip object for the specified trip

GET to /experiences/:id/users

expects token for authorization
outputs the users who are signed up for that experience
...also outputs the title and description of the experience for clarification purposes

POST to /experiences

expects token for authorization
requires title, description, category, street, region, city, postCode, and provider_id in the req.body
adds the experience to the array of experiences

PUT to /experiences/:id

expects token for authorization
updates the experience at the id

DELETE to /experiences/:id

expects token for authorization
deletes the experience at the id point

EXPENSES ROUTES:
