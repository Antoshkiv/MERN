import React from 'react';
import { UsersList } from '../components';
const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Ant',
      image: 'https://picsum.photos/id/237/200/300',
      places: 24,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
