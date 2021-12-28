import {connect} from "react-redux";
import {Messages} from "./Messages";
import {messageTypes} from "../../../../redux/dialogsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {compose, Dispatch} from "redux";
import withAuthRedirect from "../../../../hoc/withAuthRedirect";
import React from "react";

type mapStateToPropsType = {
    messages: messageTypes[]
}
type mapDispatchToPropsType = {

}
export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): mapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)