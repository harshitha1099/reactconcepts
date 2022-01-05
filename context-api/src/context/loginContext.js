import React from 'react'

const LoginContext = React.createContext();

let LoginProvider = LoginContext.Provider
let loginConsumer = LoginContext.Consumer

export default LoginContext;
export{LoginProvider,loginConsumer}