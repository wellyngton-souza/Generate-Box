import BoxRadius from "../boxRadius";
import { useState } from "react";
import { PainelBox } from "./style";

const Painel = () =>{
  const [borda, setBorda] = useState(0);
  const MudarBordar = (nBorda: number) =>{
    setBorda(nBorda);
  }

  return (
    <>
      <PainelBox>
        <div>
          <h2>Este é o painel</h2>
          <p>Todas<input type="range" min="0" max="100" onChange={(e)=>{MudarBordar(Number(e.target.value))}} /></p>
          <p>Borda1<input type="range" min="0" max="100" onChange={(e)=>console.log(e.target.value)} /></p>
          <p>Borda2<input type="range" min="0" max="100" /></p>
          <p>Borda3<input type="range" min="0" max="100" /></p>
          <p>Borda4<input type="range" min="0" max="100" /></p>
        </div>
        <BoxRadius />
      </PainelBox>
    </>
  );
}

export default Painel;
