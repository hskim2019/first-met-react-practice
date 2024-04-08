import React, {useState} from "react";

// useCounter 라는 custom hook 만들기
// 초기 카운트 값을 파라미터로 받아서 count라는 이름의 state를 생성,
// count 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 hook
function useCounter(initialValue) {
 // const [변수명, set함수명] = useState(초기값);
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;