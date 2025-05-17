import './App.css';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home.js';
import Projet from './Projet.js';
import About from './About.js';
import Service from './Service.js';
import Deratisation from './Dératisation.js';
import Desinsectisation from './Desinsectisation.js';
import Desinfection from './Desinfection.js';
import Contact from './Contact.js';
import Login from './Client.js'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomeDash from './admin/homedash.js';
import DashAdmin from './admin/DashAdmin.js';
import Clients from './admin/gesclient.js';
import Documents from './admin/gesdoc.js';
import Avis from './admin/avispass.js';
import Demandes from './admin/demande.js';
import AddClient from './admin/ajouterclient.js';
import AddAvisPassage from './admin/ajouavs.js';
import AddDemande from './Client/ajoudemande.js';
import DashClient from './Client/dashclienthome.js';
import AddDocument from './admin/ajouterdoc.js';
import Homeclt from './Client/DashClient.js';
import ClientAvis from './Client/clientavi.js';
import Demande from './Client/gestdem.js';
import Clientdoc from './Client/clientdoc.js';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dash")
  const isClient=location.pathname.includes("/clie")

  return (
    <>
    {!isDashboard && !isClient && <Header/>}


      <Routes>
        <Route path="/" element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={300}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/projet" element={
            <TransitionGroup>
              <CSSTransition key="projet" classNames="fade" timeout={300}>
                <Projet />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/about" element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={300}>
                <About />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/service" element={
            <TransitionGroup>
              <CSSTransition key="service" classNames="fade" timeout={300} >
                <Service />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/deratisation" element={
            <TransitionGroup>
              <CSSTransition key="deratisation" classNames="fade" timeout={300}>
                <Deratisation />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/desinsectisation" element={
            <TransitionGroup>
              <CSSTransition key="desinsectisation" classNames="fade" timeout={300}>
                <Desinsectisation />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/desinfection" element={
            <TransitionGroup>
              <CSSTransition key="desinfection" classNames="fade" timeout={300}>
                <Desinfection />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/contact" element={
            <TransitionGroup>
              <CSSTransition key="contact" classNames="fade"timeout={300}>
                <Contact />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/login" element={
            <TransitionGroup>
              <CSSTransition key="login" classNames="fade" timeout={300}>
                <Login />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        
         <Route
          path="/dashadmin" element={
            <TransitionGroup>
              <CSSTransition key="dashadmin" classNames="fade" timeout={300}>
                <DashAdmin />
              </CSSTransition>
            </TransitionGroup>
          }
        />
         <Route
          path="/client" element={
            <TransitionGroup>
              <CSSTransition key="client" classNames="fade" timeout={300}>
                <Homeclt/>
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route path="/dashclientad" element={<Clients/>}/>
        <Route path="/dashdocumentad" element={<Documents/>}/>
        <Route path="/dashavisad" element={<Avis/>}/>
        <Route path="/dashdemandead" element={<Demandes/>}/>
        <Route path="/dashajoutcl" element={<AddClient/>}/>
        <Route path="/dashajoutavi" element={<AddAvisPassage/>}/>
        <Route path="/dashajoutdo" element={<AddDocument/>}/>
        <Route path="/dashajoudem" element={<AddDemande/>}/>
        <Route path="/clientavi" element={<ClientAvis/>}/>
        <Route path="/clientdem" element={<Demande/>}/>
        <Route path="/clientajoudem" element={<AddDemande/>}/>
        <Route path="/clientdoc" element={<Clientdoc/>}/>
        
      </Routes>
     
      {isDashboard && <HomeDash/> }
      {!isDashboard && !isClient && <Footer/>}
      {isClient && <DashClient/>}
      

   </>
  );
}


export default App;
