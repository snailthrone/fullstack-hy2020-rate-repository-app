import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-native';
import useRepository from '../hooks/useRepository';

import AppBar from './AppBar';
import { RepositoryItemWithButton } from './RepositoryItem';
import RepositoryList from './RepositoryList';
import ReviewForm from './ReviewForm';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const repositoryMatch = useRouteMatch('/:id');
  const repository = useRepository(repositoryMatch);

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/reviewform" exact>
          <ReviewForm />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/:id" exact>
          {repository && <RepositoryItemWithButton item={repository} />}
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
