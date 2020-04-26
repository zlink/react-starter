import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './store/actionCreators';

function Counter(props) {
  const {
    counter,
    actions: { increment, decrement, incrementIfOdd, incrementAsync },
  } = props;

  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={() => increment()}>
        increment
      </button>
      <button type="button" onClick={() => decrement()}>
        decrement
      </button>
      <button type="button" onClick={() => incrementIfOdd()}>
        incrementIfOdd
      </button>
      <button type="button" onClick={() => incrementAsync()}>
        incrementAsync
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
