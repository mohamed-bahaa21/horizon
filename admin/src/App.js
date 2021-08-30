import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { AuthProvider } from "./services/Auth";
import PrivateRoute from "./routes/PrivateRoute";
// import Axios from "axios";

import TheLayout from "./containers/TheLayout";
import Login from "./views/pages/login/Login";

// Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));
// Pages
// const Login = React.lazy(() => import('src/views/pages/login/Login'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: null
  //   };

  //   this.getUser = this.getUser.bind(this);
  // }

  // getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:5000/api/getAdminUser",
  //   }).then((res) => {
  //     this.setState({
  //       data: res.data
  //     })
  //     // console.log("USER: ", res.data);
  //   });
  // };



  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          {/* <React.Suspense fallback={loading}>
            <Switch> */}
              <PrivateRoute path="/" name="Home" component={TheLayout} />
              <Route path="/login" exact name="Login" component={Login} />
              {/* <PrivateRoute path="/" name="Home" render={props => <TheLayout {...props} />} /> */}
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} /> */}
              {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} /> */}
              {/* <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
            {/* </Switch>
          </React.Suspense> */}
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
