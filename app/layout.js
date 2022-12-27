import Nav1 from "../Components/Nav1"
import FooterNav from '../Components/FooterNav'
export default function RootLayout({ children }) {

  return (
    <html>
      <head/>
      <body>
      <Nav1/>
      {children}
      <FooterNav/>
      </body>
   
    </html>
  )
}
