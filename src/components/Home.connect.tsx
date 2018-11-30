
import { bindActionCreators, Dispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { RootState } from '../reducers';

import Home from './Home';

export type Action = ActionType<typeof actions>;

const mapStateToProps = (state: RootState, ownProp: {}) => ({
  count: state.game.count,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  increment: () => dispatch(actions.incrementAction()),
});

const wrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);

export default wrappedComponent;