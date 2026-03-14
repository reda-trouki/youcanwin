import { Facebook, Instagram, Linkedin, ShieldCheck, Trophy, X } from 'lucide-react'
import SocialButton from './ui/SocialButton'

const Footer = () => {

  const socials = [
    {link: "#", icon: <Facebook />},
    {link: "#", icon: <X />},
    {link: "#", icon: <Instagram />},
    {link: "#", icon: <Linkedin />}
  ]

  const links =[
    {link: "#solution", text: "Nos offres"},
    {link: "#catalog", text: "Nos jeux"},
    {link: "#pricing", text: "Album 2025"},
    {link: "#backoffice", text: "À propos"},
  ]

  const contact = [
    {link: "mailto:games@agency.africa ", text: "games@agency.africa"},
    {link: "#",text:"Mentions légales"},
    {link: "#",text:"Protection des données (CNDP) ↗"},
    {link: "#",text:"Conditions d'utilisation"}
  ]

  return (
    <footer>
  <div className="container">
    <div className="footer-grid">
      {/* <!-- Brand --> */}
      <div className="footer-brand">
        <a href="#" className="footer-logo">
          <div className="footer-logo-icon"><Trophy color='white' /></div>
          <span><em>You</em>can<em className='text-green'>win</em></span>
        </a>
        <p>Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.</p>
        <div className="socials">
          {socials.map(social => (
            <SocialButton link={social.link} icon={social.icon} />
          ))}
        </div>
      </div>
      {/* <!-- Links --> */}
      <div className="footer-col">
        <h4>Liens rapides</h4>
        <ul>
          {links.map((link) =>(
            <li><a href={link.link}>{link.text}</a></li>
          ))}
        </ul>
      </div>
      {/* <!-- Legal --> */}
      <div className="footer-col">
        <h4>Contact &amp; Légal</h4>
        <ul>
          {contact.map((link) =>(
            <li><a href={link.link}>{link.text}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Youcanwin. Tous droits réservés.</p>
      <p>Un service de <a href="#">Agency.Africa</a> — games.agency.africa</p>
    </div>
    <div className="cndp-badge">
      <span><ShieldCheck /> Site conforme CNDP Maroc</span>
    </div>
  </div>
</footer>
  )
}

export default Footer