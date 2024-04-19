import React from "react";

// 여기에서는 컨텍스트 초기 값을 별도로 설정하지 않고, 이후 Provider 에서 값을 설정할 것
const ThemeContext = React.createContext();
// 개발자 도구에서 컨텍스트의 이름을 확인하기 위해 설정
ThemeContext.displayName = "ThemeContext";  

export default ThemeContext;