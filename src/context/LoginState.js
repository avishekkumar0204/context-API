import React, { useState } from 'react';
import LoginContext from './LoginContext';

export default function LoginState(props) {
    const student = {
        name: "Avishek",
        roll: 4
    }
    const [detail, setDetail] = useState(student);
    const update = () => {
        if (detail.roll === 4) {
            setDetail({
                name: "Golu",
                roll: 5
            })
        }
        else {
            setDetail({
                name: "Avishek",
                roll: 4
            })
        }
    }
    return (
        <LoginContext.Provider value={{ detail, update }}>
            {props.children}
        </LoginContext.Provider>
    )
}
