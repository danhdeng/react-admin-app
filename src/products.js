import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ProductsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="price" />
            <EmailField source="email" />
            <TextField source="description" />
            <TextField source="image" />
            <TextField source="category" />
        </Datagrid>
    </List>
);