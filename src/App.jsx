import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutaProtegida from "./layout/RutaProtegida";

import Inicio from "./pages/Inicio";
import Error404 from "./pages/Error404";
import ContactEmail from "./pages/ContactEmail";
import Feed from "./pages/Feed";
import Metodologia from "./pages/Metodologia";
import Encuesta from "./pages/Encuesta";
import Login from "./pages/Login"
import Quiz from "./pages/Quiz";
import {AuthProvider} from "./context/AuthProvider"
import {QuizProvider} from "./context/QuizProvider"

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <QuizProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Inicio />} />
          <Route path="*" element={<Error404 />} />
          <Route path="email" element={<ContactEmail />} />
          <Route path="feed" element={<Feed />} />
          <Route path="metodologia" element={<Metodologia />} />
          <Route path="inicio" element={<Inicio/>} />
          <Route path="encuesta" element={<Encuesta/>} />
          <Route path="login" element={<Login/>} />
        </Route>


        <Route path = "/admin" element={<RutaProtegida/>}>
          <Route index element= {<Quiz/>}/>
+        </Route>
      </Routes>
      </QuizProvider>
    </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
