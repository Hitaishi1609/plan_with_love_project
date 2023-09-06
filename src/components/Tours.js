import Card from "./Card";

function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>  //copy of obj sent - cloning
                    })
                }
            </div>
        </div>
    );
}

export default Tours;