import Button from "./Button"

function Squares(){
  return (
      <main className="Squares">
        <div className="Squares-item">
          <img src="./square1.png" />
          <Button text="RIO DE JANEIRO" color="white" outline={true} />
        </div>
        <div className="Squares-item">
          <img src="./square2.png" />
          <Button text="RIO DAS COSTAS" color="white" outline={true} />
        </div>
        <div className="Squares-item">
          <img src="./square3.png" />
          <Button text="CALDAS NOVAS" color="white" outline={true} />
        </div>
        <div className="Squares-item">
          <img src="./square4.png" />
          <Button text="AMAZÔNIA" color="white" outline={true} /> 
        </div>
       
      </main>
    )
}

export default Squares