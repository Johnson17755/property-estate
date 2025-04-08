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

FETCHING PROPERTIES
