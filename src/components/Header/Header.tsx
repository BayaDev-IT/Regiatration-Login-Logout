import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { logOut } from '../../store/slice/userSlice';

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user)
    // console.log(user);
    const hendleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <header>
            <h2>username: {user?.username}</h2>
            <h2>email: {user?.email}</h2>
            <h2>id: {user?.id}</h2>
            <button onClick={hendleLogOut}>Log Out</button>
        </header>
    );
};

export default Header;