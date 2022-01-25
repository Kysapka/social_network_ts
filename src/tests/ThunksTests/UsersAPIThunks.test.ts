import {getUsers, setTotalCount, setUsers, toggleIsFetching} from "../../redux/UsersReducer";
import {UserApiResponseType, usersAPI} from "../../apis/api";

jest.mock('../../apis/api')

let users: UserApiResponseType;

const UsersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() =>{

    users =  {
        error: null,
        items: [{
            id: 1,
            name: 'TestName',
            followed: true,
            photos: {small: '', large: ''},
            uniqueUrlName: 'uniqueUrlName',
            status: 'status'
        }],
        totalCount: 1
    }

    dispatchMock.mockClear()
    getStateMock.mockClear()
    UsersAPIMock.getUsers.mockReturnValue(Promise.resolve(users))
})

afterAll(() => {
    UsersAPIMock.getUsers.mockClear()
})

test('get users success', async () => {

    const thunk = getUsers(1,1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setUsers(users.items))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleIsFetching(false))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setTotalCount(users.totalCount))

})