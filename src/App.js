import "./App.css";

function App() {
  let name = "전종훈";
  let food = ["고기", "식빵", "우유", "짜짱면"];
  let check = true;
  let ui = {
    login: <div>로그인 박스</div>,
    user: <div>user 박스</div>,
    show: <div>show 박스</div>,
  };

  let st = { width: "100px", heigth: "300px" };
  return (
    <>
      <div>Hello, {name}</div>
      <ol>
        {food.map((v) => {
          return (
            <>
              <li>{v}</li>
              <span>{`${v}는 먹기 좋아 ㅎㅎ`}</span>
            </>
          );
        })}
      </ol>
      {[<h2>show</h2>, <h2>me</h2>, <h2>the</h2>, <h2>money</h2>]}
      {check ? <div>참이야</div> : <div>거짓이야</div>}
      {check === true && <div>조건문이 참일때만 보여줄 때</div>}
      {ui["show"]}
      {[ui["login"], ui["user"]]}

      <img
        style={{ width: "200px", heigth: "200px", border: "3px solid red" }}
        src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="laptop"
      ></img>

      <img
        style={st}
        src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="laptop"
      ></img>
    </>
  );
}

export default App;
