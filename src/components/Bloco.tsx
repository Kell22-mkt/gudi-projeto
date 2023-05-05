import Button from "./Button"

type BlocoProps = {
    img: string,
    text1: string,
    text2: string,
    text3: string,
}

function Bloco(props: BlocoProps){
  return (
        <main className="Bloco">
            <section className="Bloco-B2" style={{backgroundImage: "url("+props.img+")"}}></section>
            <section className="Bloco-B1">
            <div>
                <p className="Bloco-line">{props.text1}</p>
                <h1>{props.text2}</h1>
                <p>{props.text3} </p>
                <Button text="Agendar" color="white" />
            </div>
            </section>
        </main>
    )
}

export default Bloco