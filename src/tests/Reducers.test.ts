import usersReducer, {follow, unfollow, UsersPageTypes} from "../redux/UsersReducer";

export let initialTestState: UsersPageTypes;

beforeEach(() => {
    initialTestState = {
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

test('follow successes', () => {

    const action = follow(2)

    const newState = usersReducer(initialTestState, action)

    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(true)
    expect(newState.users[2].followed).toBe(true)

})

test('unfollow successes', () => {

    const action = unfollow(3)

    const newState = usersReducer(initialTestState, action)

    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(false)
    expect(newState.users[2].followed).toBe(false)

})