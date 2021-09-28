import React from 'react';
import { Link } from 'react-router-dom';

const User = (user) => {
  
  return (

    <div key={user._id} className="talent">
      <h2>{`${user.title}`}</h2>
      <p>{`${user.points}`}</p>
      <p>{`${user.tools}`}</p>
      <p>{`${user.link}`}</p>
    </div>
  );
};

const UserList = ({ user, title }) => {
  
  if (!user) return <h3>No Users</h3>;
  
  const renderUsers = () => {
    if (!user) return null;
    return user.project
      // .filter(user => )
      .map(user => <User key={user._id} {...user} />);
  }

  return (
    <>
      {renderUsers()}
    </>
  );
};

export default UserList;
