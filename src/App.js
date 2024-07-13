
//using class based component
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar'
// import Enews  from './components/Enews'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   // let a ="rohan"; //here no need to write let directly we can write
//   pageSize=5;
//   // apikey=process.env.REACT_APP_NEWS_API;
//   apikey="8e1402fca16a40008af7ad4bd77d7554";
//   state={
//     progress: 0
//   }
// setProgress=(progress)=>{
//   setState({progress: progress})
// }

//   a="rohan";
//   render() {
//     return (
//       <div>
//         {/* hello react this is the first class based component {a} through this we can call any variable using <var> */}
//         <Router>
//         <Navbar/>
//         <LoadingBar
//         color='#f11946'
//         height={3}
//         progress={state.progress}
//       />
//         <Switch>
//         <Route exact path="/home"><Enews apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
//           <Route exact path="/general"><Enews apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
//           <Route exact path="/business"><Enews apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /></Route>
//           <Route exact path="/entertainment"><Enews apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
//           <Route exact path="/health"><Enews apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" /></Route>
//           <Route exact path="/science"><Enews apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" /></Route>
//           <Route exact path="/sports"><Enews apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
//           <Route exact path="/technology"><Enews apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }


//using function based component
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Enews  from './components/Enews'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App=()=>{
  // let a ="rohan"; //here no need to write let directly we can write
  const pageSize=5;
  // apikey=process.env.REACT_APP_NEWS_API;
  const apikey="8e1402fca16a40008af7ad4bd77d7554";

  const [progress,setProgress]=useState(0);
    return (
      <div>
        {/* hello react this is the first class based component {a} through this we can call any variable using <var> */}
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Switch>
        <Route exact path="/home"><Enews apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/general"><Enews apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business"><Enews apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><Enews apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/health"><Enews apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"><Enews apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"><Enews apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><Enews apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
        </Switch>
        </Router>
      </div>
    )
}

export default App;