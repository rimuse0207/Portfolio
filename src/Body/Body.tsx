import styled from "styled-components";
import SecondDeparts from "../Header/Departs/SecondDeparts";
import { CreateStyledDivMainContainer } from "../Header/HeaderCss";
import { IoPersonSharp } from "react-icons/io5";

const CreateStyledInfoDiv = styled.div`
    border:1px solid black;
    display: flex;
    font-weight: bolder;
    :only-child{
        width:100px;
    }
    .info_iocons{
        color:darkgray;
    }
`


const Body = () => {
    return (
        <CreateStyledDivMainContainer>
            <div className="Header_Container">
                <SecondDeparts MainTitle="Who am I ?"></SecondDeparts>
                <CreateStyledInfoDiv>
                    <div className='info_iocons'><IoPersonSharp></IoPersonSharp></div>
                    <div>
                        <div>이름</div>
                        <div>유성재</div>
                    </div>
                </CreateStyledInfoDiv>
                
            </div>
        </CreateStyledDivMainContainer>
    )
}

export default Body;