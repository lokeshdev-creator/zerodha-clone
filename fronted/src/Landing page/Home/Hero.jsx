import React from "react";
import singup from "../singup/SignUp";

const Hero =() =>{
    return (
        <div className="container text-center">
            <div className="row text-center">
                <img src="src/assets/homeHero.png" className="mb-3"/>
                <h1>Invest in everything</h1>
                <p className="fs-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary " style={{width:"20%", margin:"0 auto"}}>
                    Sing up for free
                </button>
            </div>
        </div>
    )
}
export default Hero;