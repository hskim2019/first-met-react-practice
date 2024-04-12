import React from "react";

// 클래스 컴포넌트에서 이벤트 핸들러 사용하기
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        // isConfirmed : 확인 여부를 저장하기 위한 변수, 초기값 false
        this.state = {
            isConfirmed: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;