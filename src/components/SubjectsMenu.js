import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';

const shortName = (fullname) => {
  const [name, surname] = fullname.split(' ');
  return `${name[0]}. ${surname}`;
};

const AhtleteMenuLink = ({ id, to, label }) => (
  <Route path={`/athlete/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const SubjectsMenu = ({ athletes }) => (
  <div>
   <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>
    </div>
  </div>
);

export default SubjectsMenu;
