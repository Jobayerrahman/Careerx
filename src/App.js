import { BrowserRouter} from 'react-router-dom'
import Approute from "./Route/Approute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Approute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
