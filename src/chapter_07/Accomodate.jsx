
// useCounterhook 을 사용하는 accomodate라는 함수 컴포넌트
// 사람을 수용하는 시설에서 사용한다고 가정

import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 유형1. 의존성 배열이 없는 형태
    // 컴포넌트가 마운트 된 직후에 호출되며 이후 컴포넌트가 업데이트 될 때마다 호출
    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 유형2. 의존성 배열이 있는 형태
    // useEffect(이펙트함수, 의존성배열) count 값이 바뀔 때마다 이펙트 함수가 호출되어 
    // 이 때 용량이 가득 찼는지 아닌지의 상태를 isFull 이라는 스테이트에 저장
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;