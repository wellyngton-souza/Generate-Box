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

    const BuscaUsuario = async () =>{
        try{
            var busca: any = await axios.get(`https://api.github.com/users/wellyngton-souza`);
            return busca.data;
        } catch (error){
            console.log(error);
            return error;
        }
    }

    useEffect(() =>{
        const mostrarBusca = async () =>{
            const resposta = await BuscaUsuario();
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
            <h2>Fetch Github</h2>
            <p>{usuario?.img}</p>
            <p>{usuario?.nome}</p>
            <p>{usuario?.seguidores}</p>
        </CardStyle>
    );
}

export default CardMain;