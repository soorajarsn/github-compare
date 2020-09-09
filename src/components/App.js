import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import Nav from "./Nav";
import "./theme.scss";
import "./App.scss";
import Loader from "./Loader";
function Card({ user,rank }) {
  return (
    <div className="user-card">
      <div className="img-and-name-container">
        <div className="name-container">{user.name || "NONAME"}</div>
        <div className="img-container">
          <img src={user.avatar} alt="" />
        </div>
      </div>
      <ul className="information-container">
        <li>
          <label>USERNAME</label>
          <span>{user.username}</span>
        </li>
        <li>
          <label>FOLLOWERS</label>
          <span>{user.followers}</span>
        </li>
        <li>
          <label>FOLLOWING</label>
          <span>{user.following}</span>
        </li>
        <li>
          <label>PUBLIC REPOS</label>
          <span>{user.public_repos || 0}</span>
        </li>
        <li>
          <label>LOCATION</label>
          <span>{user.location || "----"}</span>
        </li>
      </ul>
      <div className="rank-container">{rank}</div>
    </div>
  );
}
function NotificationCard({error}){
    return <div style={{position:"relative"}}>
        <span className="info">{error}</span>
    </div>
}
function App(props) {
  return (
    <>
      <Nav />
      <div className="card-container">
        {props.users.map((user, index) => (
          <Card key={user.id} rank={index + 1} user={user} />
        ))}
      </div>
      {props.loading && <Loader />}
      {props.error && ReactDOM.createPortal(<NotificationCard error={props.error}/>,document.getElementById('portal')) }
    </>
  );
}

const mapStatesToProps = state => ({ users: state.user.users,loading: state.user.loading, error: state.user.error});
export default connect(mapStatesToProps)(App);
