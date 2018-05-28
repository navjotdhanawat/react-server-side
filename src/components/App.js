import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { SubjectPage } from './SubjectPage';
import { NotFoundPage } from './NotFoundPage';
import athletes from '../data/data';


const renderIndex = () => <IndexPage athletes={athletes} />;
const renderAthlete = ({ match, staticContext }) => {
  const id = match.params.id;
  const athlete = athletes.find(current => current.id === id);
  if (!athlete) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <SubjectPage athlete={athlete} athletes={athletes} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/athlete/:id" render={renderAthlete} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
