import logo from './assets/inverted-logo.svg'
const Footer = () => {
  const date = new Date()
  return (
    <footer className="footer">
      <div></div>
      <div>
        <span>© {date.getFullYear()}</span>
      </div>
      <div>
        <img className='footer-logo' src={logo} alt="" />
      </div>
    </footer>
  )
}

export default Footer
