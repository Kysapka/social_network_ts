import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
}

type ProfileStatusStateType = {
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.onChangeStatusTitleHandler = this.onChangeStatusTitleHandler.bind(this)
    }

    state = {
        status: 'test status',
        editMode: false
    }

    onChangeStatusTitleHandler(event: ChangeEvent<HTMLInputElement>)  {
       this.setState({status: event.currentTarget.value})
    }

    render() {
        return (
            <div>
                { this.state.editMode
                    ? <input onChange={this.onChangeStatusTitleHandler}
                            onBlur={()=>this.setState({editMode: false})}
                             value={this.state.status}
                             placeholder={this.state.status} autoFocus
                    />
                    : <span onDoubleClick={()=>this.setState({editMode: true})}>{this.state.status}</span>
                }
            </div>
        )
    }
}