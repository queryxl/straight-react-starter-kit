import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from '../actions/counter';
import { Link }               from 'react-router';

const mapStateToProps = (state) => ({
  counter: state.counter,
  routerState: state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
});
export class HomeView extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
    counter: React.PropTypes.number
  }

  render() {
    return (
      <div>
        <h1>Welcome to Straight React Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <button onClick={this.props.actions.increment}>
          Increment
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
