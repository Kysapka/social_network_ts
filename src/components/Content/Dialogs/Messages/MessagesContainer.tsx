import {connect} from "react-redux";
import {Messages} from "./Messages";
import {messageTypes} from "../../../../redux/DialogsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {compose} from "redux";
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
const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)