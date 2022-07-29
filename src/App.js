import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <HomeContainer>
        <Header />
      </HomeContainer>
    </div>
  );
}

export default App;

const HomeContainer = styled.div`
  min-height: 100vh;
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 25%
  );

  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 25%
  );

  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 25%
  );

  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 25%
  );

  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.4) 25%
  );
`;
