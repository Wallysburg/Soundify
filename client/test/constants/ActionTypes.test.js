import * as ActionTypes from '../../src/constants/ActionTypes';

test('CHANGE_ROUTE', () => {
    expect(ActionTypes.CHANGE_ROUTE).toBe('CHANGE_ROUTE');
});

test('FETCH_NEW_STREAM_SONGS_SUCCESS', () => {
    expect(ActionTypes.FETCH_NEW_STREAM_SONGS_SUCCESS).toBe('FETCH_NEW_STREAM_SONGS_SUCCESS');
});

test('FETCH_SESSION_LIKES_SUCCESS', () => {
    expect(ActionTypes.FETCH_SESSION_LIKES_SUCCESS).toBe('FETCH_SESSION_LIKES_SUCCESS');
});

test('FETCH_SESSION_FOLLOWINGS_SUCCESS', () => {
    expect(ActionTypes.FETCH_SESSION_FOLLOWINGS_SUCCESS).toBe('FETCH_SESSION_FOLLOWINGS_SUCCESS');
});

test('FETCH_SESSION_PLAYLISTS_SUCCESS', () => {
    expect(ActionTypes.FETCH_SESSION_PLAYLISTS_SUCCESS).toBe('FETCH_SESSION_PLAYLISTS_SUCCESS');
});

test('FETCH_SESSION_USER_SUCCESS', () => {
    expect(ActionTypes.FETCH_SESSION_USER_SUCCESS).toBe('FETCH_SESSION_USER_SUCCESS');
});

test('FETCH_SONG_COMMENTS_SUCCESS', () => {
    expect(ActionTypes.FETCH_SONG_COMMENTS_SUCCESS).toBe('FETCH_SONG_COMMENTS_SUCCESS');
});

test('FETCH_SONGS_REQUEST', () => {
    expect(ActionTypes.FETCH_SONGS_REQUEST).toBe('FETCH_SONGS_REQUEST');
});

test('FETCH_SONGS_SUCCESS', () => {
    expect(ActionTypes.FETCH_SONGS_SUCCESS).toBe('FETCH_SONGS_SUCCESS');
});

test('FETCH_USER_FOLLOWINGS_SUCCESS', () => {
    expect(ActionTypes.FETCH_USER_FOLLOWINGS_SUCCESS).toBe('FETCH_USER_FOLLOWINGS_SUCCESS');
});

test('FETCH_USER_PROFILES_SUCCESS', () => {
    expect(ActionTypes.FETCH_USER_PROFILES_SUCCESS).toBe('FETCH_USER_PROFILES_SUCCESS');
});

test('FETCH_USER_SUCCESS', () => {
    expect(ActionTypes.FETCH_USER_SUCCESS).toBe('FETCH_USER_SUCCESS');
});

test('LOAD_NEW_STREAM_SONGS', () => {
    expect(ActionTypes.LOAD_NEW_STREAM_SONGS).toBe('LOAD_NEW_STREAM_SONGS');
});

test('LOGIN_SUCCESS', () => {
    expect(ActionTypes.LOGIN_SUCCESS).toBe('LOGIN_SUCCESS');
});

test('LOGOUT', () => {
    expect(ActionTypes.LOGOUT).toBe('LOGOUT');
});

test('ON_LOAD_START', () => {
    expect(ActionTypes.ON_LOAD_START).toBe('ON_LOAD_START');
});

test('ON_LOADED_METADATA', () => {
    expect(ActionTypes.ON_LOADED_METADATA).toBe('ON_LOADED_METADATA');
});

test('ON_PAUSE', () => {
    expect(ActionTypes.ON_PAUSE).toBe('ON_PAUSE');
});

test('ON_PLAY', () => {
    expect(ActionTypes.ON_PLAY).toBe('ON_PLAY');
});

test('ON_TIME_UPDATE', () => {
    expect(ActionTypes.ON_TIME_UPDATE).toBe('ON_TIME_UPDATE');
});

test('ON_VOLUME_CHANGE', () => {
    expect(ActionTypes.ON_VOLUME_CHANGE).toBe('ON_VOLUME_CHANGE');
});

test('PLAY_SONG', () => {
    expect(ActionTypes.PLAY_SONG).toBe('PLAY_SONG');
});

test('TOGGLE_FOLLOW', () => {
    expect(ActionTypes.TOGGLE_FOLLOW).toBe('TOGGLE_FOLLOW');
});

test('TOGGLE_LIKE', () => {
    expect(ActionTypes.TOGGLE_LIKE).toBe('TOGGLE_LIKE');
});

test('TOGGLE_LIKE_SUCCESS', () => {
    expect(ActionTypes.TOGGLE_LIKE_SUCCESS).toBe('TOGGLE_LIKE_SUCCESS');
});

test('TOGGLE_REPEAT', () => {
    expect(ActionTypes.TOGGLE_REPEAT).toBe('TOGGLE_REPEAT');
});

test('TOGGLE_SHOW_HISTORY', () => {
    expect(ActionTypes.TOGGLE_SHOW_HISTORY).toBe('TOGGLE_SHOW_HISTORY');
});

test('TOGGLE_SHUFFLE', () => {
    expect(ActionTypes.TOGGLE_SHUFFLE).toBe('TOGGLE_SHUFFLE');
});

test('WINDOW_RESIZE', () => {
    expect(ActionTypes.WINDOW_RESIZE).toBe('WINDOW_RESIZE');
});