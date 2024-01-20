import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const PrewievHome: FC = () => {
    return (
        <div>
            <h1>Preview HOME</h1>
            <Link to={'sign-in'}><button>Login</button></Link>
            <Link to={'sign-up'}><button>Registration</button></Link>
        </div>
    );
};

export default PrewievHome;