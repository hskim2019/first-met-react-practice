import Card from "./Card";

function ProfileCard(props) {
    return (
        <><Card title="홍길동" backgroundColor="#4ae04e">
            <p>안녕하세요</p> {/* children */}
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p> {/* children */}
        </Card>
        <Card title="홍길동" backgroundColor="#4ae04e">
                <p>안녕하세요</p> {/* children */}
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p> {/* children */}
            </Card>
        </>
    );
}

export default ProfileCard;