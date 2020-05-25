import React from "react";
import "../../styles/Login.css";
import { Link, Redirect } from "react-router-dom";
import { requestLogin } from "../../constants/Api";
import Cookie from "js-cookie";
import axios from "axios";
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "tuantranquang20@gmail.com",
      password: "tuantran",
    };
    this.login = this.login.bind(this);
  }

  async login() {
    try {
      const res = await requestLogin({
          USERNAME: this.state.username,
          PASS: this.state.password
      })
      Cookie.set('SESSION_ID', res.token)
      window.location.href = '/pageAdmin'
    } catch (err) {
      console.log(err, "đây là cái đ gì");
    }
  }

  handleTextChange(field, event) {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    const token = Cookie.get("SESSION_ID");
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <div className="container-fluid">
          <div className="loginForm">
            <form method="POST">
              <div className="form-group">
                <input
                  type="username"
                  placeholder="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => this.handleTextChange("username", e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="form-control"
                  value={password}
                  onChange={(e) => this.handleTextChange("password", e)}
                />
              </div>
              <div className="form-group">
                <a href="#">Quên mật khẩu?</a>
              </div>
              <Link to="/pageAdmin">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={this.login}
                >
                  <div className="login-button-content">
                    <span>Đăng nhập</span>
                  </div>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default LoginScreen;
