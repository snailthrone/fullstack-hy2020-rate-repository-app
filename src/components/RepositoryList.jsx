import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';

import Dropdown from './Dropdown';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const dropdownItems = [
  { label: 'Latest repositories', value: 'latest_repositories' },
  { label: 'Highest rated repositories', value: 'highest_rated_repositories' },
  { label: 'Lowest rated repositories', value: 'lowest_rated_repositories' },
];

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ onValueChange, repositories }) => {
  const history = useHistory();
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  const onPress = id => () => {
    history.push(`/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<Dropdown items={dropdownItems} onValueChange={onValueChange} />}
      keyExtractor={item => item.id}
      renderItem={item => (
        <TouchableOpacity onPress={onPress(item.item.id)}>
          <RepositoryItem {...item} />
        </TouchableOpacity>
      )}
      testID="repositoryList"
    />
  );
};

const getParameters = value => {
  switch (value) {
    case 'latest_repositories':
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
    case 'highest_rated_repositories':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
    case 'lowest_rated_repositories':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
    default:
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
  }
};

const RepositoryList = () => {
  const [parameters, setParameters] = useState(getParameters());
  const { repositories } = useRepositories(parameters);

  const onValueChange = value => setParameters(getParameters(value));

  return <RepositoryListContainer repositories={repositories} onValueChange={onValueChange} />;
};

export default RepositoryList;
