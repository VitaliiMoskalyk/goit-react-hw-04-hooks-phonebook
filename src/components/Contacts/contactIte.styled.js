import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
margin: 0;
padding: 0;
display: flex;
justify-content:space-between;
align-items:center;
min-width:250px;
`

export const Image = styled.img`
width:50px;
border-radius:50px;
padding:2px;

`

export const Name = styled.p`
width:120px;
padding: 2px;
overflow:hidden;
margin: 0;

font-weight:bold;
`

export const Number = styled.span`
width:120px;
padding: 2px;
overflow:hidden;
`

export const FlexContact = styled.div`
display: flex;
flex-direction:column;
`

export const Button = styled.button`
width:20px;
height: 20px;
padding: 0;
border-radius:50px;
outline:none;
border:none;
overflow:hidden;

background-color:#b1bbdb
`