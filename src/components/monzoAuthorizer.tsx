import React from 'react';

const MonzoAuthorizer = () => {
    return (
        <div id="authorizerComponent">
            <a href={process.env.REACT_APP_MONZO_AUTH}>
                Lets get authorized
            </a>
        </div>
    )
}

export default MonzoAuthorizer;