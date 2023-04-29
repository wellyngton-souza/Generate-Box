import { useEffect, useState } from "react";
import { BoxRad } from "./style";

interface Props {
  totalBorda: number[];
}

const BoxRadius = (props: Props) => {
  const [copy, setCopy] = useState("Copiar Codigo");

  useEffect(()=>{
    setCopy("Copiar Codigo");
  },[props]);

  const copiarTexto = () =>{
    navigator.clipboard.writeText(
        `border-radius: ${props.totalBorda[0]}% ${props.totalBorda[1]}% ${props.totalBorda[2]}% ${props.totalBorda[3]}%;`
    );
    
    setCopy("Texto Copiado Com Sucesso");
  }

  return (
    <>
      <BoxRad borderRadius={props.totalBorda}>
          <h2>Border-Radius: {props.totalBorda[0]}% {props.totalBorda[1]}% {props.totalBorda[2]}% {props.totalBorda[3]}%;</h2>
          <button onClick={copiarTexto}>{copy}</button>
      </BoxRad>
    </>
  );
}

export default BoxRadius;