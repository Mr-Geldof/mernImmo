import React from "react";

const Fin = () =>{
    return(
        <div className="fin">
            <div className="contact">
                <h2>Contactez-nous</h2>
                <form className="formulaire">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" placeholder="Votre email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <input type="texte" class="form-control" placeholder="Votre message"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
                    <h3>Tomi Batela</h3>
                    <div class="divider1"></div>
                    <p>
                        Est en mot d'origine Lingala qui a pour signification "Protegons nous"<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    </p>
                    <h4>Copyright © 2021-2022</h4>
            </div>
        </div>
    )
}
export default Fin;