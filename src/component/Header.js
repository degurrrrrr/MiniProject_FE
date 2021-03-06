import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../element/index";
import { useHistory } from "react-router-dom";

const Header = ()=> {
    let history = useHistory();
    return(
        <React.Fragment>
            <Head>
                <h1 onClick={()=> {history.push("/")}}>logo</h1>
                <Grid is_flex>
                    <Button _onClick={()=> {history.push("/login");}} text="로그인" width="100px" padding="10px 0" font-size="15px"></Button>
                    <Button _onClick={()=> {history.push("/register");}} text="회원가입" width="100px" padding="10px 0" font-size="15px" margin="0 0 0 10px"></Button>
                </Grid>
            </Head>
        </React.Fragment>       
    )
}

const Head = styled.div`
    background-color: #1f969c;
    font-family: 'DungGeunMo';
    padding: 25px 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    h1{
        margin: 0; font-size: 30px; color: #fff; cursor: pointer;
    }
`;

export default Header;