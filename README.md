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

- Component 종류
    - Function Component 함수 컴포넌트와 Class Component 클래스 컴포넌트로 나뉜다

-  Class Component
    -  리액트의 모든 클래스 컴포넌트는 React.Component 를 상속받아서 만든다.
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