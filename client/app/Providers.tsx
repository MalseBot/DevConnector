"use client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Alert from "./components/Alert"

export function Providers({children}: {children: React.ReactNode}){
    return(
        <Provider store={store}>
            <Alert/>
            {children}
        </Provider>
    )
}