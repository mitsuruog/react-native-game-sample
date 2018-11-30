import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface HomeProps {
  count: number;
  increment: Function;
}

interface HomeState {
}

export default class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home {this.props.count}</Text>
        <TouchableOpacity onPress={() => this.props.increment()}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});