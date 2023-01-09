import { useState } from "react";
import Information from "./components/Information";
import Search from "./components/Search";

function App() {

  const [data, setData] = useState()

  return (
    <div className="App">

      <Search setData={setData}/>
      {!data ? <h2>No data found.</h2> : <Information data={data} />}
      
    </div>
  );
}

export default App;
