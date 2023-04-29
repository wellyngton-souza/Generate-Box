import BoxRadius from "../boxRadius";
import { useState } from "react";
import { PainelBox } from "./style";

const Painel = () =>{
  const [borda, setBorda] = useState([0,0,0,0]);

  const bordaUnica = (nBorda: number, posit: string) =>{
    let ab = [...borda];
    ab[Number(posit[1])] = nBorda;
    setBorda(ab);
  }

  const todasBordas = (nBorda: number) =>{
    let ab = [nBorda, nBorda, nBorda, nBorda];
    setBorda(ab);
  }

  return (
    <>
      <PainelBox>
        <div>
          <h2>Box-Radius</h2>
          <p>Todas<input type="range" min="0" max="50" onChange={(e)=>{todasBordas(Number(e.target.value))}} /></p>
          <p>Borda1<input type="range" id="b0" min="0" max="50" onChange={(e)=>{bordaUnica(Number(e.target.value), e.target.id)}} /></p>
          <p>Borda2<input type="range" id="b1" min="0" max="50" onChange={(e)=>{bordaUnica(Number(e.target.value), e.target.id)}} /></p>
          <p>Borda3<input type="range" id="b2" min="0" max="50" onChange={(e)=>{bordaUnica(Number(e.target.value), e.target.id)}} /></p>
          <p>Borda4<input type="range" id="b3" min="0" max="50" onChange={(e)=>{bordaUnica(Number(e.target.value), e.target.id)}} /></p>
        </div>
        <BoxRadius totalBorda={borda} />
      </PainelBox>
    </>
  );
}

export default Painel;