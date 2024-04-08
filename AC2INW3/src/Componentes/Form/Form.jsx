function Form() {
    return(
    <form action="" id="contactForm">
        <div className="input">
            <label>Nome:</label>
            <input type="text" placeholder="Digite aqui..."/>
        </div>
        <div className="input">
            <label>Email:</label>
            <input type="text" placeholder="Digite aqui..."/>
        </div>
        <div>
            <label>Mensagem:</label>
            <textarea rows="4" placeholder="Digite sua mensagem aqui..."></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>
    )
}

export default Form