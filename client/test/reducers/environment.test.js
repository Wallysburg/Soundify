import * as types from '../../src/constants/ActionTypes';
import environmentReducer from '../../src/reducers/environment';
import { initialState } from '../../src/reducers/environment';

test('Initial State', () => {
  const state = {
    height: 0,
    width: 0
  }
  expect(initialState).toEqual(state);
});

describe('default', () => {
  test('default case returns current state', () => {
    const state = {
      height: 0,
      width: 0,
    };
    const newState = environmentReducer(state, {});    
    expect(state).toEqual(newState);
  });
});

describe('WINDOW_RESIZE', () => {
  test('Window resize updates height and width', () => {
    const state = {
      state: state,
      height: 5,
      width: 5
    };

    const newState = environmentReducer(state, {
      type: types.WINDOW_RESIZE,
      height: 10,
      width: 9
    });

    expect(newState.height).toEqual(10);
    expect(newState.width).toEqual(9);
  });
});