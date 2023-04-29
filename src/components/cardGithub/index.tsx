import { CardStyle } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

type Perfil = {
    img: string;
    nome: string;
    repositorios: number;
}

const CardMain = () =>{
    const [usuario, setUsuario] = useState<Perfil>();

    const BuscaGithub = async () =>{
        try{
            var busca: any = await axios.get(`https://api.github.com/users/wellyngton-souza`);
            console.log(busca.data);
            return busca.data;
        } catch (error){
            console.log(error);
            return error;
        }
    }

    useEffect(() =>{
        const mostrarBusca = async () =>{
            const resposta = await BuscaGithub();
            setUsuario({
                img: resposta.avatar_url,
                nome: resposta.login,
                repositorios: resposta.public_repos
            });
        }
        mostrarBusca();
    }, []);

    return(
        <CardStyle>
            <div>
                <img src={usuario?.img} alt="wellyngton"></img>
                {usuario?.nome}
            </div>
            <p>{usuario?.repositorios} Projetos</p>
        </CardStyle>
    );
}

export default CardMain;