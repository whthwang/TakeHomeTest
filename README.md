# Application Start Up Instructions
1. In the terminal and the root folder of the application, run the following commands:
  a. npm install
  b. npm run build
  d. npm start


# TakeHomeTest
Goal: Create a multi-component React/Redux/Saga/Node Express app to process results from a REST service.


# Backend (Node.js)
Restful service providing API to manage the data to be pulled from http://jsonplaceholder.typicode.com/posts


# Front End (React/Redux/Redux Saga)
1. Read data from created backend JSON rest API.
2. Provide the ability for users to search the JSON data by title.
3. Results of user search should be presented on the page.
4. Provide the ability for the user to select an entry from the results and have it populate an edit form.
5. Provide the ability for the user to type the title of an entry in the edit form and have it populate the form.
6. Provide the ability for users to edit the entry and have it saved in the local Redux store. (the edited entry should be presented on subsequent searches until page reload)
7. (Bonus) Incorporate auto-complete to predict what the user will type next for the title


# Requirements
1. Use React, Redux with Sagas and Node Express Server
2. Include Unit Tests for frontends and backends
3. All dependencies should be publicly available or properly included with the project and referenced within the package.json

store input in the local state
store application changes like the array of items in the redux store.

