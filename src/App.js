import './App.css';
//import PostHistory from './components/post_history';
//import PostForm from "./components/post_form.jsx"
import Header from './components/header.jsx'
import Amas from './components/amas.jsx'
import About from './components/about.jsx'
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <HashRouter>
      <div>
        <div className="">
          <Header/>
        </div>
        <div className="App">
          <Switch>
          <Route exact path="/" component={() => <About/>}>
           {/*<PostForm/>*/}
           
          </Route>
         {/* <Route exact path="/new">
          <PostForm/>
            </Route>
          <Route exact path="/posts">
  <PostHistory/> 
          </Route>
  */}
          <Route exact path="/ama" component={() => <Amas/>}>
          </Route>
          </Switch>
          <p>Built by <a href="https://arweave.news">arweave.news</a> | Source on <a href="https://github.com/xylophonez/permablog">GitHub</a></p>
        </div>
      </div>
    </HashRouter>
  
    </div>
  );
}

export default App;
