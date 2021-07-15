import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostList } from "./posts";
import {ProductsList} from "./products";

const dataProvider = jsonServerProvider('https://fakestoreapi.com');
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com/');
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="Products" list={ProductsList} />
          {/* <Resource name="posts" list={PostList} /> */}

          {/* <Resource name="users" list={UserList} /> */}
      </Admin>
);

export default App;