import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <button onClick={() => {
            logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            });
        }}>Log out</button>
    );
}

export default Logout;