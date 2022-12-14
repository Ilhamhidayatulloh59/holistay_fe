import { Route, Routes } from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import HomePage from "./pages/user/home";

function App() {

    navigator.geolocation.getCurrentPosition((item) => {
      localStorage.setItem("lat", item.coords.latitude)
      localStorage.setItem("lng", item.coords.longitude)
    })
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
