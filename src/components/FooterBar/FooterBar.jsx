import './FooterBar.css'

export default function FooterBar(){
  return (
    <div className="footer-bar">
      <p>&copy; Katie Hill {new Date().getFullYear()}</p>
    </div>
  )
}