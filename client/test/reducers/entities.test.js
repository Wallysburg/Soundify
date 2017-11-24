import * as types from '../../src/constants/ActionTypes';
import entitiesReducer from '../../src/reducers/entities';
import { initialState } from '../../src/reducers/entities';

test('Initial State', () => {
  const state = {
    playlists: {},
    songs: {},
    users: {},
  };
  expect(initialState).toEqual(state);
});

describe('LOGOUT', () => {
  test('logging out clears playlists', () => {
      const state = entitiesReducer({
          playlists: {
              playlist: 'playlist'
          },
          songs: {
              song: 'song'
          },
          users: {
              user: 'song'
          },
      }, 
      {
          type: types.LOGOUT
      });

      expect(state).toEqual({
          playlists: {},
          songs: {
              song: 'song'
          },
          users: {
              user: 'song'
          },
      });
  });
});

describe('default', () => {
  test('default case returns current state', () => {
    const state = {
      playlists: {},
      songs: {},
      users: {},
    };
    const newState = entitiesReducer(state, {});    
    expect(state).toEqual(newState);
  });
});

