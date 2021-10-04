import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";
import TinderCards from "./components/tinderCards/TinderCards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
import Chats from "./components/chats/Chats";
import ChatScreen from "./components/chatScreen/ChatScreen";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
        <Route exact path="/chats">
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route exact path="/chats/:person">
          <Header backButton="/chats" />
          <ChatScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
