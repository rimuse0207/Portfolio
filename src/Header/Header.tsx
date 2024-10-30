import React from "react";
import FirstDeparts from "./Departs/FirstDeparts";
import SecondDeparts from "./Departs/SecondDeparts";
import ThirdDeparts from "./Departs/ThirdDeparts";
import { CreateStyledDivMainContainer } from "./HeaderCss";

const Header = () => {
    return <CreateStyledDivMainContainer>
        <div className="Header_Container">
            <FirstDeparts></FirstDeparts>
            <SecondDeparts  MainTitle="Yoo sungjae"></SecondDeparts>
            <ThirdDeparts></ThirdDeparts>
        </div>
    </CreateStyledDivMainContainer>
}

export default Header;