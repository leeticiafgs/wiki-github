import styled from "styled-components";

export const ItemContainer=styled.div`

width: 80%;

h3{
    font-size: 32px;
    color: #FAFAFA;
}

p{
    font-size: 16px;
    color: #FAFAFA60;
    margin-bottom: 10px;
    
}


hr{
    color: #FAFAFA;
    margin: 20px 0;
}

button.remover{
    color: #FF0000;
    border:none;
    background: none;  
    text-decoration: none;   
    font-family: Arial;
    font-size: 14px;
    cursor: pointer;
    
    &: hover {
        color: #FAFAFA;
        
    }
}

a{
    text-decoration: none;   
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;

    &: hover {
        color: #FAFAFA;
        
    }
}

`

