import React, {ChangeEvent} from 'react'


type ProfileStatusPropsType = {
    status: string
    updateStatusTC: any
}

type ProfileStatusStateType = {
    status: string
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.onChangeStatusTitleHandler = this.onChangeStatusTitleHandler.bind(this)
    }

    state = {
        status: this.props.status,
        editMode: false
    }

    onChangeStatusTitleHandler(event: ChangeEvent<HTMLInputElement>)  {
       this.setState({status: event.currentTarget.value})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
        this.props.updateStatusTC(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                { this.state.editMode
                    ? <input onChange={this.onChangeStatusTitleHandler}
                            onBlur={() => this.deactivateEditMode()}
                             value={this.state.status}
                             placeholder={this.state.status} autoFocus
                    />
                    : <span onDoubleClick={()=>this.setState({editMode: true})}>{this.props.status}</span>
                }
            </div>
        )
    }
}