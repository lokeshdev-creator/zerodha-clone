import React from "react";

const singup=()=>{
    return(
        <div className="container col-4">
            <h1>Sing Up!</h1>
            <div class="form-floating mb-3 p-2">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3 p-2">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<button className="btn btn-primary m-3" style={{width:"30%", margin:"0 auto"}}>
                    Sing up
                </button>
            
        </div>
    );
}

export default singup;