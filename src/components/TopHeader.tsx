import Button from "./Button"

function TopHeader(){
  return (
      <main className="TopHeader">
        <div>
          <img src="./logo_1.png" />
        </div>
        <section>
          <div>
            <a href="">Sobre</a>
            <a href="">Benefícios</a>
            <a href="">Contato</a>
          </div>
          <Button text={"Agendar"} />
        </section>
      </main>
    )
}

export default TopHeader


