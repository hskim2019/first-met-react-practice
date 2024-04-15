# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


***
[처음만난 리액트](https://github.com/soaple/first-met-react-practice-v18) 강의를 들으면서 메모한 내용입니다.
***
</br>

# node 설치
- node 설치 시 npm이 함께 설치된다

## 설치된 node, npm 버전 확인

```cmd
> node -- version
> npm -- version
```

# create-react-app

- create-react-app 명령어 실행 시 오류가 발생하여 리액트 제거 후 재설치 진행함

```cmd
> npm uninstall -g create-react-app
> npm install -g create-react-app
```

## create-react-app

```cmd
> npx create-react-app [app-name]
> npx create-react-app my-app
```

## 실행

```cmd
> cd my-app
> npm start
```

# JSX
- chapter_03 참고

- JSX 는 자바스크립트와 XML, HTML 을 합친 것
- JSX 는 내부적으로 XML, HTML 코드를 JavaScript 로 변환하는 과정을 거침
- React.createElement : JSX 코드를 JavaScript 로 변환하는 역할, (자바스크립트 객체를 만드는 역할)
- JSX 를 사용하면 코드가 간결해진다.

```javascript
React.createElement(
    type, // 타입
    [props], // 더 자세히 배우기 전까지는 element 의 속성이라고 생각하자 실제로는 attribute 보다 좀 더 상위에 있는 개념이지만...
    [...children] // 엘리먼트의 자식 엘리먼트들
    );
```

```JSX
// JSX 사용한 코드
// 내부적으로는 React.createElement() 함수를 사용하게 되어있고 그 결과로 JavaScript 로 변환됨
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
)

// JSX를 사용하지 않은 코드
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

// 위 React.createElement()의 결과로 아래의 객체 생성
const element = {
    type: 'h1',
    props: {
        className : 'greeting',
        children : 'Hello, world!'
    }
}
```

# Elements
## 엘리먼트란
- 자바스크립트 객체 형태로 존재
- 컴포넌트 유형과 속성 및 내부의 모든 자식에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체


```javascript
// type 에 html 태그 이름이 문자열로 들어가는 경우
{
    type: 'button',
    props : {
        className : 'bg-green',
        children : {
            type: 'b',
            props : {
                children : 'Hello, element!'
            }
        }
    }
}

// 렌더링 후
<button class='bg-green'>
   <b>
      Hello, element!
   </b>
</button>

// type 에 html 태그 이름이 문자열이 아닌 리액트 컴포넌트 이름일 때
// (모든 React 컴포넌트는 최종적으로 HTML 태그를 사용하게 되어있다)
{
    type : Button,
    props: {
        color : 'green',
        children : 'Hello, element!'
    }
}

//
```

```javascript
function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
           <b>
               {props.children}
           </b>
        <button> 
    )
}

// confirmDialog 컴포넌트가 Button 컴포넌트를 포함하고 있다
function ConfirmDialog(props) {
    return (
        <div>
           <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
           <Button color='green'>확인</Button>
        </div>
    )
}

// 렌더링 후 객체
{
    type: 'div',
    props: {
        children : [
            {
                type : 'p',
                props : {
                    children : '내용을 확인하셨으면 확인 버튼을 눌러주세요.'
                }
            },
            {
                type : Button, // 타입이 HTML 태그가 아닌 React 컴포넌트 이름, React 는 버튼 컴포넌트의 엘리먼트를 생성해서 합치게 된다
                props : {
                    color : 'green',
                    children : '확인'
                }
            }
        ]
    }
}

// 렌더링 후 최종적인 객체
// 모든 컴포넌트가 CreateElement 함수를 통해 Element 로 변환된다
{
    type: 'div',
    props: {
        children : [
            {
                type : 'p',
                props : {
                    children : '내용을 확인하셨으면 확인 버튼을 눌러주세요.'
                }
            },
            {
                type : 'button', 
                props : {
                    className : 'bg-green',
                    children : {
                        type : 'b',
                        props : {
                            children : '확인'
                        }
                    }
                }
            }
        ]
    }
}
```
## 엘리먼트의 불변성 immutable
- Elements 생성 후에는 children 이나 attributes를 바꿀 수 없다
- 화면에 변경된 엘리먼트를 보여주기 위해서는 새로운 엘리먼트를 만들면 된다. 리액트는 빠른 랜더링이 장점이므로 만들어서 바꾸면 된다.
- Virtual DOM 에서 변경된 부분을 계산(Compute Diff), 컴퓨트 딥 하고 해당 부분만 다시 랜더링

### Elements 렌더링

- chapter_04 참고

```javascript
// 루트 div 에 리액트 엘리먼트 렌더링 - virtual dom 에서 실제 브라우저 dom 으로 이동하는 과정
const element = <h1>안녕, 리액트!</h1>; // React 엘리먼트 생성. React 엘리먼트는 React 의 Virtual DOM 에 존재하는 것
ReactDOM.render(element, document.getElementById('root')); // 생성된 리액트 엘리먼트를 루트 div (=DOM 엘리먼트)에 렌더링,  DOM 엘리먼트는 실제 브라우저의 DOM 에 존재하는 것
```

```javascript
function tick() {
    const element = (
        <div>
             <h1>안녕, 리액트!</h1>
             <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

# Components 와 Props
- chapter_05 참고
- props : 리액트 컴포넌트에서의 입력, 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
- props---(입력)--- [React component] ---(출력)--- elements
- 모든 리액트 컴포넌트는 props 에 관해 pure 함수같은 역할을 해야한다 
- 모든 리액트 컴포넌트는 Props 를 직접 바꿀 수 없고, 같은 Props 에 대해서는 항상 같은 결과를 보여줄 것
- 컴포넌트의 이름은 항상 대문자로 시작해야 한다. 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식함

```javascript
// 함수가 pure 하다. props a 와 b 값을 바꾸지 않으므로
function sum(a, b) {
    return a + b;
}

// 함수가 impure 하다. 입력값으로 받은 account 의 값을 변경했으므로
function withdraw(account, amount) {
    account.total -= amount;
}
```

- Props 전달하는 방법 예
```javascript
// JSX 사용
function App(props) {
    return (
        <Profile
            name="홍길동"
            introduction="안녕하새요, 홍길동입니다."
            viewCount={1500}
        />
    );
}

// JSX 를 사용하지 않을 때
React.createElement(
    type,
    [props],
    [...children]
)
React.createElement(
    Profile, // type
    { // props
        name: "홍길동",
        introduction: "안녕하세요, 홍길동입니다.",
        viewCount : 1500
    },
    null // children
)
```

## Component 종류
- Function Component 함수 컴포넌트와 Class Component 클래스 컴포넌트로 나뉜다

- Class Component
    - 리액트의 모든 클래스 컴포넌트는 React.Component 를 상속받아서 만든다.

</br>

  |**<center>Function Component</center>**|**<center>Class Component</center>**|
  |:---|:---|
  |state 사용 불가| 생성자에서 state를 정의|
  |Lifecycle에 따른 기능 구현 불가| setState() 함수를 통해 state 업데이트 |
  |**Hooks** 을 사용하여 클래스 컴포넌트 기능 구현|Lifecycle methods 제공|


```javascript
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}
```

# State 와 Lifecycle
- State : 리액트 컴포넌트의 변경 가능한 데이터
- 렌더링이나 데이터 흐름에 사용되는 값만 state 에 포함시켜야 하고, 그렇지 않은 값은 컴포넌트의 인스턴스 필드로 정의한다
- state 가 변경될 경우 컴포넌트가 다시 렌더링되기 때문에 렌더링과 데이터 흐름에 관련된 없는 값을 포함하면 불필요한 경우에 컴포넌트가 다시 렌더링 되어 성능을 저하시킬 수 있다

```javascript
class LikeButton extends React.Component {
    constructor(props) { // 클래스 컴포넌트는 state 를 생성자에서 정의. 함수 컴포넌트는 state 를 useState 라는 hook을 사용해서 정의
        super(props);

        this.state = { // 현재  컴포넌트의 state 를 정의하는 부분
            liked: false
        }
    }
}
```
- state 는 직접 수정할 수 없다(하면 안된다)
```javascript
// state 를 직접 수정 (잘못된 사용법)
this.state = {
    name: '홍길동'
};

// setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
    name: '홍길동'
});
```

## 컴포넌트의 생명주기
- chapter_06 참고
- Mounting : 컴포넌트의 생성자가 실행되고 생성자에서는 컴포넌트의 state 를 정의, 컴포넌트가 렌더링되며 이후에 componentDidMount 함수가 호출된다
- Updating : state 가 변경되거나 falseUpdate 라는 강제 업데이트 함수 호출로 인해 컴포넌트가 다시 렌더링
- Unmounting : 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때 Unmount 발생하며 Unmount 직전에 componentWillUnmount 함수가 호출된다
<img src="./images/Screen-Shot-2018-10-31-at-1.44.28-PM.webp" style="width:870px;"/>


# Hook
- chapter_07 참고
Hook 을 사용하면 함수 컴포넌트에서도 클래스 컴포넌트와 같은 기능을 구현 할 수 있다
 |**<center>Function Component</center>**|**<center>Class Component</center>**|
  |:---|:---|
  |state 사용 불가| 생성자에서 state를 정의|
  |Lifecycle에 따른 기능 구현 불가| setState() 함수를 통해 state 업데이트 |
  |**Hooks** 을 사용하여 클래스 컴포넌트 기능 구현|Lifecycle methods 제공|

Hook 의 이름은 모두 use로 시작

## useState()
- 대표적이고 가장 많이 사용되는 Hook
- state 를 사용하기 위한 hook
```javascript
const [변수명, set함수명] = useState(초기값);
```
```javascript
import React, {useState} from "react";
function Counter(props) {
    // 클래스 컴포넌트에서는 setState 함수 하나를 사용해서 모든 state 값을 업데이트 할 수 있었지만
    // useState 를 사용하는 방법에서는 변수 각각에 대해 set함수가 따로 존재한다.
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```

## useEffect()
- 사이드 이펙트를 수행하기 위한 훅
- 사이드 이펙트 : 서버에서 데이터를 받아오거나 수동으로 DOM 을 변경하는 작업 등 다른 컴포넌트에 영향을 미칠 수 있는 작업으로 렌더링 중 작업이 완료될 수 없고 렌더링 끝난 이후에 실행되어야 함. 이러한 작업이 사이드로 실행된다는 의미에서 사이드 이펙트라고 불리며 
- useEffect는 함수 컴포넌트에서 사이드 이펙트를 실행할 수 있게 해주는 훅
- 클래스 컴포넌트에서 제공하는 생명 주기 함수인 componentDidMount, componentDidUpdate, componentWillUnmount 와 동일한 기능을 하나로 통합해서 제공
```javascript
// 의존성 배열 - 이 이펙트가 의존하고 있는 배열
//            - 배열 안에 있는 변수 중 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다
useEffect(이펙트 함수, 의존성 배열);
```
- 기본적으로 처음 컴포넌트가 렌더링 된 이후와 업데이트로 인한 재렌더링 이후 실행
```javascript
// 만약 이펙트함수가 mount 와 unmount시에 단 한번씩만 실행되게 하고 싶으면 의존성 배열에 빈 배열을 넣는다
useEffect(이펙트 함수, []);
```
```javascript
// 의존성 배열을 생략하면 컴포넌트가 업데이트될 때마다 호출 됨
useEffect(이펙트 함수);
```
- 예제
```javascript
import React, {useState, useEffect} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // componentDidMoount, componentDidUpdate와 비슷하게 작동합니다.
    useEffect(() => {    
        // 의존성 배열을 생략했기 때문에 함수가 처음 컴포넌트에 마운트 되었을 때 실행되고 이후 컴포넌트가 업데이트 될 때마다 실행된다
        // 함수 컴포넌트 안에서 선언되기 때문에 해당 컴포넌트의 props와 state 에 접근할 수도 있다

        // 브라우저 API를 사용해서 document의 title을 업데이트 합니다.
        document.title = `You clicked ${count} times`; 
        // `: Backquote, backtick, grave accent
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() =? setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```

```javascript
useEffect(() => {
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨

    return () => {
        // 컴포넌트가 마운트 해제되기 전에 실행됨
        ...
    }
}, [의존성 변수1, 의존성 변수2, ...]);
```

## useMemo()
- memoized value 를 리턴하는 훅
- memoization : 비용이 높은, 연산량이 많이 드는 함수의 호출 결과를 저장해 두었다가 같은 입력 값으로 함수를 호출하면 새로 함수를 호출하지 않고 이전에 저장해 놓았던 호출 결과를 바로 반환. 메모이제이션 된 결과 값을 Memoized Value 라고 부른다
- useMemo 훅을 사용하면 컴포넌트가 다시 렌더링 될 때마다 연산량이 높은 작업을 반복하는 것을 필할 수 있다
- 빠른 렌더링 속도를 얻을 수 있게 한다

```javascript
// 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create함수를 노출하여 결과값을 반환
const memoizedValue = useMemo(
    () => {
        // 연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```
- useMemo로 전달된 함수는 렌더링이 일어나는 동안 실행된다
- 따라서 렌더링이 일어나는 동안 실행되어서는 안 될 작업을 useMemo의 함수에 넣으면 안 됨

```javascript
// 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행되고
// 배열을 넣지 않고 useMemo 훅을 사용하는 것은 의미가 없다
const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b)
);
```

```javascript
// 의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출된다.
// 마운트 이후에 값이 변경되지 않으므로 마운트 시점에만 한 번 값을 계산할 필요가 있을 경우에 이렇게 사용
const memoizedValue = useMemo(
    () => {
        return computeExpensiveValue(a, b);
    },
    []
);
```

## useCallback()
- useMemo() Hook 과 유사하지만 값이 아닌 함수를 반환
- 컴포넌트가 렌더링 될 때마다 매번 함수를 새로 정의하는 것이 아니라 의존성 배열의 값이 바뀐 경우에만 함수를 새로 정의해서 리턴해준다.

```javascript
// 의존성 배열에 있는 변수 중 하나라도 변경되면 메모이제이션된 콜백 함수를 반환한다 
const memoizedCallback = useCallback(
    () => {
        doSomething(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```

## useRef()
- Reference를 사용하기 위한 Hook
- React 에서 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미하며 useRef() 는 이 레퍼런스 객체를 반환한다
- refObject.current : 레퍼런스 객체에는 current 라는 속성이 있는데, 이것은 현재 레퍼런스하고 있는 엘리먼트를 의미
- useRef() Hook 은 내부의 데이터가 변경되었을 때 별도로 알리지 않는다. 
 - current 속성을 변경한다고 해서 재렌더링이 일어나지 않는다 따라서 변화를 알기 위해서는 Callback ref 를 사용
 - React 는 ref 가 다른 노드에 연결될 때마다 callback을 호출
```javascript
// 파라미터로 초기값을 넣으면 해당 초기값으로 초기화된 레퍼런스 객체를 반환한다
// 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다
const refContaier = useRef(초기값);
```

## Hook의 규칙
- Hook 은 무조건 최상위 레벨에서만 호출해야 한다.
    - 반복문이나 조건문 도는 중첩된 함수들 안에서 Hook을 호출하면 안 된다.
    - Hook 은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 한다.

- React 함수 컴포넌트에서만 Hook을 호출해야 한다.
    - React 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 Hook 에서만 호출

- Hook 의 규칙을 강제로 따르게 해주는 플러그인
    - eslint-plugin-react-hooks
 
## Custom Hook 
- custom hook 을 만들어야 하는 상황
 - 두 개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때
- 이름이 use로 시작하고, 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수

# Handiling Events
- chapter_08 참고
- 이벤트 핸들링 예

```javascript

// toggle 이라는 클래스 컴포넌트
class Toggle extends React.Component {
    constructor(props) {
        super(props);

        // 이 컴포넌트의 state에 isToggleOn 이라는 변수
        this.state = {isToggleOn : true };

        // callback 에서 `this` 를 사용하기 위해서는 (constructor에서) 바인딩을 필수적으로 해주어야 한다
        // 바인드를 하는 이유는 자바스크립트에서는 기본적으로 클래스 함수들이 바운드되지 않고
        // 바인드 하지 않으면 this.handleClick 은 글로벌 스코프에서 호출됨, 글로벌스코프에서 this.handleClick 은 undefined이므로 사용할 수 없음
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(pervState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return ( // 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick 함수 호출
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}
```

```javascript
// 바인드를 사용하지 않으려면 Class fields syntax 사용
class MyButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                클릭
            </button>
        )
    }
}

// class fields 문법을 사용하지 않으려면 이벤트 핸들러 넣는 곳에 arrow function 사용
// 이 방식은 컴포넌트가 렌더링 될 때마다 다른 콜백 함수가 생성되는 문제가 있으므로
// 바인딩이나 class fileds syntax 방식을 사용하는 것이 낫다.
class MyButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // 이렇게 하면 `this`가 바운드된다
        return (
            <button onClick={() => this.handleClick()}>
                클릭
            </button>
        );
    }
}
```

```javascript
// 함수 컴포넌트 사용하려면
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법 2. arrow function 을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}
```

## Arguments 전달하기
```javascript
// event 매게변수는 리액트의 이벤트 객체를 의미
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

// id 이후에 자동으로 event 가 두번째 매게변수로 전달되는데 이 방식은 클래스 컴포넌트에서 사용하는 방식으로 지금은 거의 사용하지 않음
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

```javascript
// 함수 컴포넌트에서 이벤트 핸들러에 매개변수 전달하는 방법
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    }

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    )
}
```

# Conditional Rendering
- chapter_09 참고 : 로그인 여부를 나타내는 툴바 만들기
## Element Variable
```javascript
// Element Variable : element 를 변수처럼 저장해서 사용하는 방법
function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // button element 를 변수처럼 저장해서 사용
    // 인라인 조건문을 사용하면 더 간결하게 작성할 수 있다
    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button} // button element 를 변수처럼 저장해서 사용
        </div>
    )
}
```

## Inline Conditions 인라인 조건문
## Component 렌더링 막기
- null 을 리턴하면 렌더링되지 않는다
- 클래스 컴포넌트의 렌더 함수에서 null을 리턴하는 것은 컴포넌트 생명주기 함수에 영향을 미치지 않는다.
    - 예를 들면 componentDidUpdate 함수는 여전히 호출된다.

# Lists and Keys
- chapter_10 참고 (출석부 출력하기)
```javascript
// 이 코드를 실행하면 개발자 도구 콘솔 탭에
// Warning: Each child in a list sould have a unique "key" prop. 
// 과 같은 경고 문구가 나타난다.
// 리스트의 각 아이템은 무조건 고유한 키를 가지고 있어야 하는데 키가 없는 상태라서
function NumberList(props) {
    const { numbers } = props;

    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
);
```

```javascript
const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);

const todoItems = todos.map((todo, index) =>
    // map 함수에서 두번째 파라미터로 제공해주는 index 값을 key 로 사용하는 예
    // 아이템들의 고유한 ID가 없을 경우에만 사용해야 함
    // 리액트에서는 키를 명시적으로 넣어주지 않으면 기본적으로 인덱스 값을 키값으로 사용
    <li key={index}>
        {todo.text}
    </li>
);
```

# Forms
- chapter_11 참고(사용자 정보 입력 받기)

# Controlled Component
- 그 값이 React의 통제를 받는 input form element 를 의미
- Controlled Component 를 사용하면 사용자의 입력을 직접적으로 제어할 수 있음