import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// 부모 컴포넌트
// state 로 온도 temperature 값을 하나 갖고
function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => { // [3-1]
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => { // [3-2]
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature; 
    const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius} // [4] 변경된 celsius 값
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit} // [4] 변경된 fahrenheight 값
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;