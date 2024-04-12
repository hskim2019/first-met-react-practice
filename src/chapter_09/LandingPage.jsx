import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const onClickLogin = () => {
        setIsloggedIn(true);
    }
    
    const onClickLogout = () => {
        setIsloggedIn(false);
    }

    return (
        <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding: 16}}>소풀과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;