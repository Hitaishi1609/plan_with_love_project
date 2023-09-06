import React, {useState} from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  //to remove id from tours list
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id)    //removes the tour with passed id
    setTours(newTours);
  }

  return (
  <div className="App">
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>
    );
};

export default App;
