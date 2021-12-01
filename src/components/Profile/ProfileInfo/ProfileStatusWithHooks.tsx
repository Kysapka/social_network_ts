import React, {ChangeEvent, useEffect, useState} from 'react'


type ProfileStatusPropsType = {
    status: string
    updateStatusTC: any
}

type ProfileStatusStateType = {
    status: string
    editMode: boolean
}

export const ProfileStatusWithHooks  = (props: ProfileStatusPropsType) =>  {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onChangeStatusTitleHandler = (event: ChangeEvent<HTMLInputElement>) =>  {
        setStatus(event.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }
useEffect(() => {
        setStatus(props.status)
    },
    [props.status])
    //
    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: any) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({status: this.props.status})
    //     }
    // }

        return (
            <div>
                { editMode
                    ? <input onChange={onChangeStatusTitleHandler}
                            onBlur={() => deactivateEditMode()}
                             value={status}
                             placeholder={status} autoFocus
                    />
                    : <span onDoubleClick={activateEditMode}>{status}</span>
                }
            </div>
        )
}