// Firebase Imports
import "./firebase.config";
// Components
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
// Styling
import styled from "styled-components";
import GlobalStyle from "./globalStyle";

function App() {
  //const usersCollectionRef = collection(db, "users");

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <ContentContainer>
        <div>
          <h1>Reisnotes</h1>
        </div>
        <Notes />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ContentContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 70%;
  h1 {
    color: #faedcd;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;
