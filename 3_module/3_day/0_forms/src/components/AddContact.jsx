import React, { Component } from "react";

class AddContact extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    avatar: "",
    tmpAvatar: "",
  };

  // handleUsername = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ username: event.target.value });
  // };

  // handleEmail = (event) => {
  //   this.setState({ email: event.target.value });
  // };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChange = (event) => {
    const key = event.target.name;
    let value = "";
    if (event.target.type === "file") {
      value = event.target.files[0];
      const tmpUrl = URL.createObjectURL(value);
      this.setState({ tmpAvatar: tmpUrl });
    } else {
      value = event.target.value;
    }
    // const value =
    //   event.target.type === "file" ? event.target.files[0] : event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(this.props.toto);
    this.props.clbk(this.state);
    // You can post to the server or do whatever with this information.
  };

  render() {
    console.log(this.props);

    return (
      <form
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        className="Signup"
      >
        <div className="head">
          <div className="profile-image">
            <img alt="Profile" src={this.state.tmpAvatar} />
          </div>
          <input type="file" name="avatar" onChange={this.handleChange} />
        </div>

        <div className="main">
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
          <div className="form-group">
            <label className="label" htmlFor="">
              Username
            </label>
            <input
              // value={this.state.username}
              // onChange={this.handleChange}
              className="input"
              name="username"
              type="text"
              placeholder="Enter username..."
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="">
              Email
            </label>
            <input
              // value={this.state.email}
              // onChange={this.handleChange}
              className="input"
              name="email"
              type="email"
              placeholder="Enter email..."
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="">
              Password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter password..."
              // value={this.state.password}
              // onChange={this.handleChange}
            />
          </div>
          <div className="button-wrapper">
            <button className="btn-submit">Signup</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddContact;
