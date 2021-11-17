import React from 'react'

let footerstyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
}
export const Footer = () => {
    return (
        <footer className= "bg-secondary text-light py-3" style= {footerstyle}>
            <p className="text-center">
                Copyright &copy; Indranil Das
            </p>
        </footer>
    )
}
