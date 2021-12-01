import React, {ChangeEvent} from 'react'


type ProfileStatusPropsType = {
    status: string
    updateStatusTC: any
}

type ProfileStatusStateType = {
    status: string
    editMode: boolean
}

export const ProfileStatusWithHooks  = (props: ProfileStatusPropsType) =>  {

    // constructor(props: ProfileStatusPropsType) {
    //     super(props);
    //     this.onChangeStatusTitleHandler = this.onChangeStatusTitleHandler.bind(this)
    // }
    //
    // state = {
    //     status: this.props.status,
    //     editMode: false
    // }
    //
    // onChangeStatusTitleHandler(event: ChangeEvent<HTMLInputElement>)  {
    //    this.setState({status: event.currentTarget.value})
    // }
    //
    // deactivateEditMode() {
    //     this.setState({editMode: false})
    //     this.props.updateStatusTC(this.state.status)
    // }
    //
    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: any) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({status: this.props.status})
    //     }
    // }

        return (
            <div>
                { state.editMode
                    ? <input onChange={onChangeStatusTitleHandler}
                            onBlur={() => deactivateEditMode()}
                             value={state.status}
                             placeholder={state.status} autoFocus
                    />
                    : <span onDoubleClick={()=>setState({editMode: true})}>{props.status}</span>
                }
            </div>
        )
    }
}