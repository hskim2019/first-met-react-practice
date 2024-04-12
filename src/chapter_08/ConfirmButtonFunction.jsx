import React, {useState} from "react";

// 함수 컴포넌트에서 이벤트 핸들러 사용

function ConfirmButtonFunction(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButtonFunction;