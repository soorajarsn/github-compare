import React,{useState} from "react";
import {getUser} from '../redux';
import {connect} from 'react-redux';
function SearchUserForm({getUser}){
    const [username,setUserName] = useState("");
    function submitHandler(event){
        let url = "https://api.github.com/users/";
        getUser(url+username);
        event.preventDefault();
    }
    return (
        <form onSubmit={submitHandler}>
              <div className="input-container">
                <input name="tag" placeholder="Type username here" autoComplete="off" onChange={e => setUserName(e.target.value)} />
              </div>
              <div className='button-container'>
                <button type="submit">Search</button>
              </div>
        </form>
    )
}

const mapDispatchToProps = {
    getUser
}

export default connect(null,mapDispatchToProps)(SearchUserForm);
