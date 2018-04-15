import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView, RefreshControl } from 'react-native';
import { colors } from 'src/styles';
import styles from './TransactionsListStyles';

const keyExtractor = (item, index) => index;

const TransactionsList = ({ onRefresh, refreshing, data, EmptyListComponent, renderItem }) =>
  <ScrollView style={ styles.container }>
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={ refreshing }
          colors={ [colors.COLOR_PRIMARY] }
          onRefresh={ onRefresh } />
      }
      data={ data }
      keyExtractor={ keyExtractor }
      renderItem={ renderItem }
      ListEmptyComponent={ EmptyListComponent } />
  </ScrollView>;

TransactionsList.propTypes = {
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  EmptyListComponent: PropTypes.func,
  renderItem: PropTypes.func
};

export default TransactionsList;
