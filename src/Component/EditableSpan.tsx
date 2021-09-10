import React, {ChangeEvent, useState} from "react";

type EditableSpan = {
    title: string
    onChange: (newValue: string) => void
}

export const EditableSpan = (props: EditableSpan) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')

    const activeEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activeViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <input value={title} onChange={onChangeTitleHandler} onBlur={activeViewMode} autoFocus/> :
        <span onDoubleClick={activeEditMode}>{props.title}</span>
}