import Button from "./Button"
import Input from "./Input"

function Wallpaper(){
  return (
      <main className="Wallpaper">
        <section>
          <h1>Para qual estado você deseja ir?</h1>
          <Input placeholder="Pesquisar" />
          <div>
            <Button text="Buscar" />
          </div>
        </section>
      </main>
    )
}

export default Wallpaper