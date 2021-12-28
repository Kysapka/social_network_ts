import React from "react";
import UsersContainer from "../Users/UsersContainer";
import UserContainer from "../Users/User/UserContainer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

function Profile() {
    return (
        <>
            <UserContainer />
            <UsersContainer className={'profile'} title={'Other People'}/>
        </>
    )
}

export default withAuthRedirect(Profile)