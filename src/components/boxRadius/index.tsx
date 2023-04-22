import { BoxRad } from "./style";

interface Props {
  totalBorda: number[];
}

const BoxRadius = (props: Props) => {
  return (
    <>
        <BoxRad borderRadius={props.totalBorda}>
            <h2>Border-Radius: {props.totalBorda[0]}% {props.totalBorda[1]}% {props.totalBorda[2]}% {props.totalBorda[3]}%;</h2>
        </BoxRad>
    </>
  );
}

export default BoxRadius;