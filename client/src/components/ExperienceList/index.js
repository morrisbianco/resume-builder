import React from 'react';
import { Link } from 'react-router-dom';

const User = (user) => {
  
  return (
      <div key={user._id} className="yui-u">
        <div className="job last">
          <h2>{`${user.company}`}</h2>
          <h2>{`${user.location}`}</h2>
          <h3>{`${user.role}`}</h3>
          <h4>{`${user.date}`}</h4>
          <p>{`${user.description}`}</p>
          <p>{`${user.keyAchievements}`}</p>
        </div>
      </div>
  );
};

const UserList = ({ user, title }) => {
  
  if (!user) return <h3>No Users</h3>;
  
  const renderUsers = () => {
    if (!user) return null;
    return user.experience
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
