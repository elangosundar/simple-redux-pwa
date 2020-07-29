import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const intialStateSearch = {
        searchField: ''
    };
    
    it('should return the intial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(intialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
});

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }

    it('should return the intial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({
            robots: [],
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '33',
                name: 'test',
                email: 'test@gmal.com'
            }]
        })).toEqual({
            robots: [{
                id: '33',
                name: 'test',
                email: 'test@gmal.com'
            }],
            isPending: false
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Noooooooo'
        })).toEqual({
            error: 'Noooooooo',
            isPending: false,
            robots: []
        });
    });

});

