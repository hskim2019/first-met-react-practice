// 카드 컴포넌트는 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트
// 범용적으로 재사용 가능한 컴포넌트
// 컨테인먼트와 스페셜라이제이션 합성 방법 사용

function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;