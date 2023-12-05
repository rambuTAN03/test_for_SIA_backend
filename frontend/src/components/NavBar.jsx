import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

function NavBar() {

    const navigate = useNavigate();
    const handleHomeClick = () => navigate('/');
    const handleServiceClick = () => navigate('/Services');
    const handleLoginClick = () => navigate('/Login');

    const items = [
        {
            label: <div className='navtext' onClick={handleHomeClick}>HOME</div>,
            icon: 'pi pi-fw pi-home',
        },
        {
            label: <div className='navtext' onClick={handleServiceClick}>SERVICES</div>,
            icon: 'pi pi-fw pi-info-circle',
        },
        {
            label: <div className='navtext' onClick={handleLoginClick}>LOGIN</div>,
            icon: 'pi pi-fw pi-sign-in',
        }
    ];


    const start = <img src={logo} alt="logo" style={{ height: '2.5em', width: 'auto' }} />;

    return (
        <>
            <Menubar className="navbar" model={items} start={start} />
        </>
    )
}

export default NavBar