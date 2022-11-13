import { TrecaKomponenta } from "./TrecaKomponenta";

export const AnotherComponent = (props) => {
    return (
        <div>
            <h2> Oh hell no! {props.title}</h2>
            <TrecaKomponenta title="Ovo će biti čisti spam!"/>
        </div>
    );
};

