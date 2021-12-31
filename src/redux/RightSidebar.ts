import {v1} from "uuid";

export type OnlineFriendTypes = {
    id: string
    avatar: string
    name: string
}
export type RightSidebarTypes = {
    onlineFriends: OnlineFriendTypes[]
}

const initialState = {
    onlineFriends: [
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend1.jpg',
            name: 'Morgan Freeman'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend2.jpg',
            name: 'Jackie Chan'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend3.jpg',
            name: 'Bruce Willis'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend4.jpg',
            name: 'Jennifer Lawrence'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend5.jpg',
            name: 'Julia Roberts'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend6.jpg',
            name: 'Jennifer Aniston'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend7.jpg',
            name: 'Will Smith'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend8.jpg',
            name: 'Angelina Jolie'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend9.jpg',
            name: 'Bruce Willis'
        },
        {
            id: v1(),
            avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend10.jpg',
            name: 'Scarlett Johansson'
        },
    ]
}

function rightSidebar(state: RightSidebarTypes = initialState): RightSidebarTypes {
    return state
}

export default rightSidebar