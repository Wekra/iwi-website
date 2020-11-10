import Link from 'next/link'
import { faFacebook, faTwitter, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
    return (
        <footer className="w-full max-w-screen-lg mx-auto text-center text-gray-700 py-12">
            <hr className="border-t-2 border-gray-400 my-3 w-1/2 m-auto" />
            <div className="flex items-center justify-center">
                <ul className="flex items-center justify-end list-none font-heading">
                    { socialIcon(faFacebook, 'https://de-de.facebook.com/HsKA.IWI') }
                    { socialIcon(faTwitter, 'https://twitter.com/fsi_hska') }
                </ul>
                <Link href="/"><a className="flex items-center justify-evenly mx-8" >
                    <img src="/assets/iwi-logo.svg" alt="IWI-Logo" className="h-32"/>
                </a></Link>
                <ul  className="flex items-center justify-start list-none font-heading">
                    { socialIcon(faInstagram, 'https://www.instagram.com/iwi_fachschaft/') }
                    { socialIcon(faDiscord, 'https://discord.com/invite/Ud5KQnz') }
                </ul>
            </div>
            <p className="copyright my-4">
                &copy; { new Date().getFullYear() } Fachschaft IWI<br /> 
                <Link href="/impressum/"><a className="text-gray-700 no-underline">Impressum</a></Link>
            </p>
        </footer>
    )
}

function socialIcon(icon, href) {
    return (
        <li className="text-4xl mx-4 mb-0 text-red-700 cursor-pointer">
            <a href={ href }>
                <FontAwesomeIcon icon={ icon } />
            </a>
        </li>
    )
}

export default Footer