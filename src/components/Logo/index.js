import logo from '../../image/logo.svg';
import styled from 'styled-components';

const LogoConteiner = styled.div`
    display: flex;
    font-size: 30px;   
    align-items: center;  
`
const LogoImg = styled.img`
    margin-right: 20px;
`

function Logo() {
    return (
        <LogoConteiner>
            <LogoImg
                src={logo}
                alt="Imagem da logo do AluraBooks"
                className='logo_img'/>          
            <p> <strong>Search</strong>Books </p>
        </LogoConteiner>
    )
}


export default Logo