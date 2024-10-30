import styled from "styled-components";


const CreateStyledContextDiv = styled.div`
    line-height:70px;
strong{
    font-size:3em;
}
:nth-child(2){
    padding-left: 50px;
}
:nth-child(3){
    padding-left: 100px;
}
   
`

const ThirdDeparts = () => {
    return <CreateStyledContextDiv>
        <div>
            <strong>개발자를 위한 개발이 아닌,</strong>
        </div>
        <div>
            <strong>사용자를 위한 개발을 향해</strong>
        </div>
        <div>
            <strong>한 걸음 한 걸음 나아가겠습니다.</strong>
        </div>
    </CreateStyledContextDiv>
}

export default ThirdDeparts;