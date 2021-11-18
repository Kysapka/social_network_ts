import {AppStateType} from "../../redux/rootStore";
import {createSelector} from "reselect";
import {AuthStateType} from "../../redux/AuthReducer";

export const getAuthState = (state: AppStateType):AuthStateType => {
    return state.auth
}

export const getAuthStateReselect = createSelector(getAuthState, auth => auth)