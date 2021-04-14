import Styled from 'styled-components';

export const Newsletter = Styled.div`
    background-color: white;
    color: #00BFFF;
    text-align: center;
    text-decoration: underline;
`;

export const Superior = Styled.div`
    text-align: center;  

    h1{
        color: #A9A9A9;
    }

    button{
        background-color: transparent;
        color: white;
        font-size: 16px;
        margin: 5px 15px;
    }

    .btn{
        border-width: 5px;
        border-color: #FFD700;
    }

    .btn1{
        background-color:#40E0D0;
        border: none;
        border-radius: 4px;
        height: 30px;
    }
`;

export const Principal = Styled.div`
    text-align: center;

    h2,p{
        position: relative;
        color: white;
        bottom: 300px;
    }

    button{
        position: relative;
        bottom: 300px;
        background-color: white;
        color: #00CED1;
        border: none;
        border-radius: 4px;
        font-size: 30px;
        width: 30%;
    }

    img{
        margin-top: 2%;
        margin-left: 3%;
        position: relative;
        opacity: 0.3;
        border-radius: 4px;
    }

    .negrito{
        font-weight: bolder
    }
`;

export const Lateral = Styled.div`
    position: relative;
    margin-left: 5%;
    color: black;

    img{
        width: 20%;
    }

    figure{
        display: flex;
        background-color: white;
    }

    label{
        margin-left: 5%;
    }

    .f1{
        margin-top: 3%;
    }

    .f2{
        margin-top: 5%;
    }

    .f3{
        margin-top: 5%;
    }

    .nc{
        color: #1E90FF;
    }

    .ia{
        color: #4B0082	
    }
`;

export const Patrocinadores = Styled.div`
    text-align: center;
    img{
        width: 10%;
        margin: 0 3%;
    }
`;