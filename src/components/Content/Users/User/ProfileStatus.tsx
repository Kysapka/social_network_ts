import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./User.module.css";

type ProfileStatusPropsType = {
    status: string
    setNewStatus: (status: string) => void
}

type LocalStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, LocalStateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<LocalStateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onSpanClickHandler = () => {
        this.setState({editMode: true})
    }
    onInputBlurHandler = () => {
        this.setState({editMode: false})
        if (this.state.status === this.props.status) return
        this.props.setNewStatus(this.state.status)
    }
    onProfileStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: event.currentTarget.value})
    }
    onEnterPressed = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') this.onInputBlurHandler()
    }

    render() {
        return (
            <div className={s.aboutWrapper}>
                {
                    !this.state.editMode &&
                    <span className={s.about} onClick={this.onSpanClickHandler}>
                        <span className={s.pen}>&#9998;</span>{this.props.status}
                    </span>
                }
                {
                    this.state.editMode &&
                    <input autoFocus={true}
                           className={s.input}
                           onChange={this.onProfileStatusChange}
                           onBlur={this.onInputBlurHandler}
                           onKeyPress={this.onEnterPressed}
                           type="text"
                           value={this.state.status}/>
                }
            </div>
        )
    }
}

export default ProfileStatus