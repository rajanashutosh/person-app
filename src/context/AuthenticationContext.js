import React from "react";

const authenticationContext = React.createContext({
    authenticated: false,
    isActive: true,
    authentication: () => {
    }
});

export default authenticationContext;