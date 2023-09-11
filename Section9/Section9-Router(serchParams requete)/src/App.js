import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import Lien1 from "./components/Lien1"
import Lien2 from "./components/Lien2"
import Lien3 from "./components/Lien3"
import Users from "./components/Users"
import Profile from "./components/Profile"
import NoteUsers from "./components/NoteUsers"


function App() {
  return (
    <BrowserRouter> 
      <Menu />
{/* index permet d'indiquer au parent précédent qu'on veut afficher des infos enfant au chargement du parent. Ici on veut que les infos de Lien1 soient automatiquement visibles au chrgement de la page /docs */}
      <Routes>

        <Route path="/" element={<Navigate to="/docs" />} />  {/* Navigate est un outil de React router dom qui permet de rediriger une page sur un autre composant (anciennement Redirect) */}
        <Route path="/docs" element={<Docs />} > 
          <Route index element ={<Lien1 /> }/> {/* Quand on imbrique des routes dans les autres, on indique plus le chemin direct avec "/..." dans path, mais on met direct le nom quon veut dans l'URL, react comprend que c'est un sous element et rajoute les / dans l'URL */}
          <Route path="lien1" element={<Lien1 />} />          
          <Route path="lien2" element={<Lien2 />} />
          <Route path="lien3" element={<Lien3 />} />
        </Route>
        <Route path="/tutorial" element={<Tutorials/>} />
        <Route path="/community" element={<Community/>} />
        
        <Route path="/users" element={<Users />}> 
          <Route path=":profileId" element={<Profile />} />
          <Route path="noteUsers" element={<NoteUsers />} />
        </Route>

        <Route path = "*" element={<ErrorPage/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
