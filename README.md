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