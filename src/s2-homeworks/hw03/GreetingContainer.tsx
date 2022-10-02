import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string) => void) => {
    if (name !== '' && name.trim().length !== 0) {
        addUserCallback(name)
        setName(name)
        setError('')
    } else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
    if (name === '' || name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.target.value) // need to fix

        // error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)

    }

    const totalUsers = users.length // need to fix
    const lastUserName = (totalUsers === 0) ? '' : (users[totalUsers - 1].name)// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
