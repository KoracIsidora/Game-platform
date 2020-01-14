import  React  from "react"
import Logo from "../components/Logo"

const Footer = (props) => {
    return (
        <footer className='footer'>
            <p className="company-desc">
                Coetus game platform
            </p>
            <p>&copy; Isidora Korac</p>
            <Logo />
        </footer>
    )
}

export default Footer