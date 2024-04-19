//import React, {useState} from "react";

// 함수 컴포넌트
// props 로 scale 과 temperature를 받아서 표시해 주며 
// 온도값이 변경되었을 때에는 props에 onTemperatureChange 함수를 호출하여 상위 컴포넌트로 변경된 값을 전달
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {

    // 변경 전 :
    // const [temperature, setTemperature] = useState('');

    const handleChange = (event) => { // [1]사용자가 입력값을 변경할 때마다 handleChange 함수 호출
        // 변경 전 : 
        //setTemperature(event.target.value);
        props.onTemperatureChange(event.target.value); // [2]상위 컴포넌트로 변경된 값을 전달 (lifting up state - 하위 컴포넌트의 state 를 공통 상위 컴포넌트로 올림)
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]});
            </legend>
            {/*변경 전 : <input value={temperature} onChange={handleChange} /> 
               온도값을 컴포넌트스테이트에서 가져오는 것이 아닌 props 를 통해 가져오게 된다
               component state 를 사용하지 않게 되기 때문에 입력값이 변경되었을 때 상위 컴포넌트로 값을 전달해주어야 한다*/}
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;