//LAYOUT COMPONENT

//EXPORTING
//NEXT COMPONENTS
import Header from './Header';
import Footer from './Footer';

//LAYOUT
const Layout = ({ children }) => {
  //RETURN
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

//EXPORTING LAYOUT
export default Layout;
