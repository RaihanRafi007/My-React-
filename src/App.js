// import {Navigate, Route, Routes} from "react-router-dom";
// import Header from "./components/Header";
// import Hello from "./components/Hello";
// import Post from "./components/Post";
// import Posts from "./components/Posts";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Navigate to="/hello"/>} />
//         <Route path="/hello/*" element={<Hello/>} >
//             <Route path="world" element={<p>This is world!</p>} />
//         </Route>
//         <Route path="/posts" element={<Posts/>} />
//         <Route path="/posts/:postId" element={<Post/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  state = {
    dishes: null,
    errMess: null,
  };
  componentDidMount() {
    console.log("componentDidMount: ", this.state);
    // axios
    //   .get("http://localhost:3001/dishes")
    //   .then((response) => response.data)
    //   .then(data => {
    //     this.setState({
    //       dishes: data
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({
    //       errMess: error.message
    //     })
    //   });
    // axios.post("http://localhost:3001/dishes", {name: "Pizza", price: "799"})
    // .then(response => console.log(response))

    // axios.put("http://localhost:3001/dishes/1", {name: "Cheese Cake", price: "250"})
    // .then(response => console.log(response))

    axios
      .delete("http://localhost:3001/dishes/0")
      .then((response) => console.log(response))
      .catch((error) => {
        this.setState({
          errMess: error.message,
        });
      });
  }

  componentDidUpdate() {
    console.log("Update: ", this.state);
  }
  render() {
    return <div></div>;
  }
}

export default App;
