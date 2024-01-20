import React, { FC, FormEventHandler, useEffect, useState } from 'react'
import './regist.css'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { UserData } from '../../../store/moduls'
import {
	fetchByAddNewUser,
	toggleRedirect,
} from '../../../store/slice/userSlice'
import { useNavigate } from 'react-router-dom'

const Registration: FC = () => {
	const navigate = useNavigate()
	const [showPass, setshowPass] = useState(false)
	const dispatch = useAppDispatch()
	const { loading, redirect, error } = useAppSelector(state => state.user)
	const [userData, setUserData] = useState<UserData>({
		username: '',
		email: '',
		password: '',
	})

	const getUserData = (key: string, value: string) => {
		setUserData({ ...userData, [key]: value })
	}

	const hendleForm: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		dispatch(fetchByAddNewUser(userData))
	}

	useEffect(() => {
		if (redirect) {
			navigate('/sign-in')
		}
		return () => {
			if (redirect) {
				dispatch(toggleRedirect(false))
			}
		}
	}, [dispatch, redirect])
	return (
		<div>
			<h1>Registration</h1>
			<form onSubmit={hendleForm}>
				<input
					value={userData.username}
					onChange={e => getUserData('username', e.target.value)}
					type='text'
					placeholder='User name'
				/>
				<input
					value={userData.email}
					onChange={e => getUserData('email', e.target.value)}
					type='email'
					placeholder='email'
				/>
				<input
					value={userData.password}
					onChange={e => getUserData('password', e.target.value)}
					type={showPass ? 'text' : 'password'}
					placeholder='password'
				/>
				<button disabled={loading}>Sign up</button>
				<label>
					<input onChange={() => setshowPass(!showPass)} type='checkbox' /> Show
					password
				</label>
				<div>{error && <h3>{error} </h3>}</div>
			</form>
		</div>
	)
}

export default Registration
