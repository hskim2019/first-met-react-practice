import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    // inline-if, inline-if-else 조건부 렌더링
    return (
        <div style={styles.wrapper}>
            {/* inline-if */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
            
            {/* inline-else-if */}
            {isLoggedIn ? ( 
                <button onClick={onClickLogout}>로그아웃</button>
                ) : ( 
                <button onClick={onClickLogin}>로그인</button>
                )}
        </div>
    );
}

export default Toolbar;