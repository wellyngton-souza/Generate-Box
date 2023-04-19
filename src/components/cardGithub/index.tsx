import { CardStyle } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const CardMain = () =>{
    const [usuario, setUsuario] = useState<Perfil>();

    type Perfil = {
        img: string;
        nome: string;
        seguidores: number;
    }

    const BuscaGithub = async () =>{
        try{
            var busca: any = await axios.get(`https://api.github.com/users/wellyngton-souza`);
            console.log(busca);
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
                seguidores: resposta.followers
            });
        }
        mostrarBusca();
    }, []);

    return(
        <CardStyle>
            <h2>Desenvolvedor</h2>
            <p><img src={usuario?.img} alt="wellyngton"></img></p>
            <p>{usuario?.nome}</p>
            <p>Followers {usuario?.seguidores}</p>
        </CardStyle>
    );
}

export default CardMain;