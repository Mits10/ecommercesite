import Page from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
 return(
   <>
  <Routes>
    <Route
     path= '/'
     element={<Page/>}
    />
     <Route 
     path="*" 
     element={<h1>404 page not found!</h1>} />
  </Routes>
   </>
 );
}

export default App;
