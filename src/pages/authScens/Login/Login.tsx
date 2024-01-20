import React, { FC, FormEventHandler, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { UserData } from '../../../store/moduls';
import { fetchByLogin } from '../../../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { error, loading } = useAppSelector(state => state.user)
    const [userData, setUserData] = useState<UserData>({
        username: '',
        password: '',
    })

    const getUserData = (key: string, value: string) => {
        setUserData({ ...userData, [key]: value })
    }

    const hendleForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(fetchByLogin(userData))
    }

    useEffect(() => {
        return () => navigate('/', { replace: true })
    }, [dispatch])
    return (
        <div>
            <h1>LoGiN</h1>
            <form onSubmit={hendleForm}>
                <input value={userData.username} onChange={(e) => getUserData('username', e.target.value)} type="text" placeholder='username' />
                <input value={userData.password} onChange={(e) => getUserData('password', e.target.value)} type="password" placeholder='password' />
                <button disabled={loading}>Sign-in</button>
            </form>
            {error && <h3>{error}</h3>}
        </div>
    );
};

export default Login;