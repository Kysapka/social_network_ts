import {setFollow, UsersPageTypes} from "../redux/UsersReducer";
import mock = jest.mock;
import store from "../redux/store";


let initialTestThunkState: UsersPageTypes;

const dispatch = mock('dispatch').fn
const getState = mock('getState').fn

beforeEach(() => {
    initialTestThunkState = {
        users: [
            {
                id: 1,
                name: 'Artem',
                followed: false,
                photos: {small: '', large: ''},
                uniqueUrlName: 'uniqueUrlName',
                status: '0'
            },
            {
                id: 2,
                name: 'Petya',
                followed: false,
                photos: {small: '', large: ''},
                uniqueUrlName: 'uniqueUrlName',
                status: '1'
            },
            {
                id: 3,
                name: 'Ivan',
                followed: true,
                photos: {small: '', large: ''},
                uniqueUrlName: 'uniqueUrlName',
                status: '2'
            },
        ],
        pagesSize: 12,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        isFollowFetching: []
    }
})

test('follow thunk test', () => {

    const followThunk = setFollow(1)

    followThunk(dispatch, getState,{})

    console.log(followThunk)

})