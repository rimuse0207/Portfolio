import {CreateStyledSpanBar} from "../HeaderCss"

type SecondDeparts = {
    MainTitle: string;
}


const SecondDeparts = ({ MainTitle }:SecondDeparts) => {
    return <CreateStyledSpanBar>
                <div className="Short_line"></div>
                <div className="Name_line">{MainTitle}</div>
            </CreateStyledSpanBar>
        
        
}

export default SecondDeparts;