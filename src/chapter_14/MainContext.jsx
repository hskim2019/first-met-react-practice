import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// ThemeContext로부터 현재 설정된 테마 값을 받아와 실제 화면의 컨텐츠를 렌더링한다
// 또한 테마 변경을 누를 경우 ThemeContext 로부터 받은 toogleTheme 함수를 호출하여 ThemeContext의 값을 변경하는 역할도 한다
function MainContent(props) {
    // ThemeContext의 값을 가져오기 위해 Context.Cunsumer 컴포넌트를 사용하는 대신 useContext() Hook 을 사용했다
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >

            <p>안녕하세요. 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;