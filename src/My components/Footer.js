import React from 'react'
// We can also define an css file in the same directory and imprott t to ad the css like describe ibelow
// import "./footerStyle.css"
export const Footer = () => {
    let footerStyle={
        position:"relative",
        top:"100vh",
        width:"100%",
        border:"5px solid green"
    }
    return (
        <div className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">

            CopyRight &copy; 2021
            </p>
        </div>
    )
}
