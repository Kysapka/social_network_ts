import {follow, setFollow, setUnfollow, toggleFollowIsFetching, unfollow} from "../redux/UsersReducer";
import {followAPI, ResponseApiType} from '../apis/api';

const result: ResponseApiType<{}> = {
    resultCode: 0,
    messages: ['123'],
    data: {
        resultCode: 0
    }
}

jest.mock('../apis/api')
const followAPIMock = followAPI as jest.Mocked<typeof followAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()



beforeEach(() =>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    followAPIMock.follow.mockReturnValue(Promise.resolve(result))
    followAPIMock.unfollow.mockReturnValue(Promise.resolve(result))
})

afterAll(() => {
    followAPIMock.follow.mockClear()
    followAPIMock.unfollow.mockClear()
})


test('follow thunk test',  async() => {

   const followThunk = setFollow(1)

   await followThunk(dispatchMock, getStateMock, {})

   expect(dispatchMock).toBeCalledTimes(3)
   expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowIsFetching(1, true))
   expect(dispatchMock).toHaveBeenNthCalledWith(2, follow(1))
   expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowIsFetching(1, false))
})

test('unfollow thunk test',  async() => {

    const unfollowThunk = setUnfollow(1)

    await unfollowThunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowIsFetching(1, true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowIsFetching(1, false))
})
