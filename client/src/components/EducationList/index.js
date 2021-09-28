import React from 'react';
import { Link } from 'react-router-dom';

const User = (user) => {
  
  return (
    <>
      <div key={user._id} className="job last">
        <h4>{`${user.date}`}</h4>
      </div>
      <div className="yui-u">
        <h2>{`${user.school}`} - {`${user.location}`}</h2>
        <h3>{`${user.description}`} </h3>
      </div>
      </>
  );
};

const UserList = ({ user, title }) => {
  
  if (!user) return <h3>No Users</h3>;
  
  const renderUsers = () => {
    if (!user) return null;
    return user.education
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
