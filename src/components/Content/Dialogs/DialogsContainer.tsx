import {dialogTypes} from "../../../redux/DialogsReducer";
import {AppStateTypes} from "../../../redux/store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogs: dialogTypes[]
}
type MapDispatchToPropsType = {

}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}
const mapDispatchToProps = (): MapDispatchToPropsType => {
    return {}
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
