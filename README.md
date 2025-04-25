realestate17755
Mongodb is a nosqul document database and it store data in json like documents.
first you need to create a free tier of mongodb.
you need to copy the string which you will have to fill in your .env file.
(mongodb+srv://Jhay:\***\*\*\*\*\***@cluster0.mzqcu.mongodb.net/\***\*\*\*\*\***?retryWrites=true&w=majority&appName=Cluster0
the first is password, realestate is the name of the folder you created at browse collection.)

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

connect to database..
first you need to create a dependency called
npm i mongodb mongoose
create a folder called config, next we create a file called databse.js, to connect using a function called connectDB

    MODELS

we need to create two models for the users and the property then we also need to create models for the messaging.
WHAT IS MODELS? SCHEMA Used to define the structure of the User document in the MongoDB database.
MODEL:Used to create a model based on the schema, which allows interaction with the database.
MODELS: Used to check if a model with the same name already exists (to avoid redefining it).

NEXT AUTH WORKS
next auth is an open source solution for authentication build in support for google.
database sessions or jwt.
-serverless function : api route often impliments to handle authetication ralate sign in/ sign out.
-creat A session: containt the user identification.
-store session: it scooky each request
-verify session: check to verify signature key
-access protect routes : route making use of middleware.

PROVIDERS.
SECURE BY DEFAULT.

NEXT AUTH STEP
-we are using googleor 1st you need to set up your google account. console.cloud.google.com
select a project or create a project.
click on API & SERVICES GO TO OAUTH CONSENT SCREEN, choise external.
Appname : the name of app
user support email : your google email
fill the rest.

NEXT AUTH & PROVIDER SETUP.
1st i created the api/auth/[...nextauth] then route.js file
2nd created the utilis folder then the authOptions.js file
3rd created the AuthProvider components file
4th go to the root layout and wrappe it with the children.

SIGN IN button.
1st i import the signin and providers also usesession.
2nd i remove the isLoggedIn and replaced with session
3rd i called the useEffect for the provider. map through the logging button

SAVING USERS DATA TO THE DATABASE.
authOPTION
navbar update

PROTECTED ROUTE
create a file called middleware.js
