# Instgram Clone App
#### A photo sharing social media web application built using Express.js, React, Redux, Mongodb. Features include:

- Post and upload images
- Like, unlike, save and unsave images
- Login, logout, create/delete profile
- Comment, delete comments
- Upload and crop profile picture
- Search users

### Depency

+ redux-thunk@2.4.1
+ axios@0.27.2
+ redux@4.2.0
+ moment@2.29.4
+ react-file-base64@1.0.3
+ @ant-design/icons@4.7.0
+ antd@4.21.6
+ body-parser@1.20.0
+ express@4.18.1
+ mongoose@6.4.4
+ nodemon@2.0.19
+ cors@2.8.5
---
npm install express mongoose body-parser cors nodemon
```
1. npm init -y
    -> this creates package.json file
    
2. npm install express mongoose body-parser cors nodemon
    -> this installs these packages
    
3. Create index.js file, this will contain all connection information

4. Create user.js in models folder this will create or fetch user

5. User thunderclient a visual studio extension for verifying connection right from visual studio

6.Start your server -> node index.js
```
 Getting Start - CLIENT
```
//- React install
    1. npx create-react-app ./
        Just like regular react project use this to create default react files
    node index.js
// - Axios
    2. npm install axios
[axios](https://www.npmjs.com/package/react-axios)

npm install  axios moment redux redux-thunk react-file-base64 antd @ant-design/icons 

npm install axios moment redux redux-thunk

// - Start your new React app
    3. npm start
```


```
-> package.json
  "main": "app.js",
  "type":"module",
```

- nodemon
  / package.json -> restart the server whenever we change the code
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },

---
# Server side
## 1.Create the datebase
[MongoDB Altas Datebase](https://www.mongodb.com/atlas/database)

## 2.Connect to Database
- connect to to your appliance


## 3.Mongoose -> Create Router, Controller, Schema


[mongoose](https://mongoosejs.com/docs/)   
- " Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides **schema** validation, and is used to translate between objects in code and the representation of those objects in MongoDB." [Introduction to Mongoose for MongoDB](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

### Set up Schdema
/models/storyContent.js
```javascript 

import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String },
    image: { type: String, required: true },
    tags: String,
    likes: { type: Number, default: 0 },
    postDate: { type: Date, default: new Date() },
});

export default mongoose.model("Story", storySchema);

```
### Set up routes
```javascript
import { Router } from "express";
//import { getStories, createStory, updateStory, deleteStory, likeStory } from "../controllers/stories.js";
import { getStories, createStory } from "../controllers/stories.js";
const router = Router();

router.get("/", getStories);
router.post("/", createStory);
// router.patch("/:id", updateStory);
// router.delete("/:id", deleteStory);
// router.patch("/:id/likeStory", likeStory);

export default router;
```

# Client side - React

### Axios
- What is Axios

Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.

### Redux
 - What is Redux
 
 Redux is a pattern and library for managing and updating application state, using events called "actions".

### install redux
cd client 
```bash
Miya-Miah:client miyawu$ npm install react-redux
```

```javascript
// src/reducer /index.js
import { Provider } from "react-redux";

```
Import provider from React Redux.So provider is going to keep track of that store, which is that global state. That's going to allow us to access that store from anywhere inside of the app. So we don't have to be exactly in a parent component or a child component.
We can access that state from anywhere.

[React Redux Tutorials - 16 - Reducers](https://www.youtube.com/watch?v=dm_2AANfdfA)
[React Redux Tutorials](https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

- Dispatch 
```javascript
// Home / Home.js 
    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();
```
- Fetching Data - Redux thunk

```javascript
//client/src/actions/stories.js:
export const getStories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch({ type: FETCH_ALL_STORIES, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
```
-  Fetching Data from Global State (useSelector)



  ### Appendix
  ---
  [The Source of Code](https://github.com/OakAcademy/mern-project)
  [HTTPS ststus code](https://httpstatus.com/)
  [Mastering Mongoose for MongoDB and Node.js](https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs)
  [MPN react-redux](https://www.npmjs.com/package/react-redux)


  HelloUser04
  CdWlQmSTMj7ZuzCq

  mongodb+srv://HelloUserIG:CdWlQmSTMj7ZuzCq@cluster0.rskwl9u.mongodb.net/?retryWrites=true&w=majority