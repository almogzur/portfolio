import Nav1 from "../Components/Nav1"
import Nav2 from '../Components/Nav2'
export default function RootLayout({ children }) {

  return (
    <html>
      <head/>
      <body>
      <Nav1/>
      {children}
      </body>
    </html>
  )
}
