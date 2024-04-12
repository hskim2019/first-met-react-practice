import React from "react";

// class fields syntax 사용하기 - ConfirmButton.jsx 코드에서 [1], [2] 단계로 변경
class ConfirmButtonClassFields extends React.Component {
    constructor(props) {
        super(props);

        // isConfirmed : 확인 여부를 저장하기 위한 변수, 초기값 false
        this.state = {
            isConfirmed: false,
        };

        // [1]bind 코드 제거
        //this.handleConfirm = this.handleConfirm.bind(this);
    }

    // [2]아래 함수를 Arrow function으로 변경
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    handleConfirm2 = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm2}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButtonClassFields;