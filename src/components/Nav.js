import React from 'react';
import SearchUserForm from './SearchUserForm';
function Nav(){
    return (
        <nav>
            <div className="title-container"> 
                <a href="/"><div className={"img-container"}><img src={"https://www.elasticpath.com/sites/default/files/getelastic/compare-button.jpg"} alt="none" /></div></a>
                <a href="/"><h1 className={"title"}>Gitub Compare</h1></a>
            </div>
            <div className="form-container">
                <SearchUserForm />
            </div>
        </nav>
    )
  }
  export default Nav;