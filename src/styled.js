import styled from 'styled-components';


export const Container = styled.div`
background:rgb(0, 0, 0);
width: 541;
height: 498;
top: 166px;
left: 449px;
border-radius: 5px;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const Showlist = styled.div`
background:rgb(251, 251, 251);
text-align: center;
border-radius: 8px;
padding: 20px;
width: 500px;
padding: 40px;

ul{
    padding: 0;
    margin-top: 40px;
}
`

export const Input = styled.input`
border: 2px solid #D1D3D466;
width: 330px;
height: 30px;
top: 30px;
left: 20px;
border-radius: 5px;
border-width: 2px;
margin-right: 10px;
`

export const Button = styled.button`
background: #8052EC;
width: 130px;
height: 35px;
top: 30px;
left: 390px;
border-radius: 5px;
color: #fff;
font-weight: 400px;
`

export const ListItem = styled.div`
height: 60px;
padding: 0 10px;
border-radius: 5px;
background: ${(props => props.isFinish ? '#E8FF8B' : '#E4E4E4')};
box-shadow: 1px 4px 10px 0px #00000033;
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;
`