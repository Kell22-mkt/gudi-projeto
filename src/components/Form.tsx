import Input from "./Input"
import Button from "./Button"

function Form(){
    return (
        <main className="Form">
            <section>
                <h1>Fale conosco</h1>
                <Input placeholder="Digite o seu melhor email" />
                <Input placeholder="Assunto" />
                <Input placeholder="Escreva a sua mensagem" />
                <Button text="Enviar" outline={true} color="white" />
            </section>
        </main>
    )
}

export default Form