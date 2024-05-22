
import { MenuOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import './index.scss'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <div className="header_logo">
            <img src='https://png.pngtree.com/png-vector/20220820/ourmid/pngtree-modern-minimalist-shining-diamond-logo-design-png-image_6117527.png' width={100} alt='logo'></img>
            <h1>Hot Link: 0912345678</h1>
            <PhoneOutlined  className='iconP'/>
        </div>

        <div className="header_search">
            <input type="text" placeholder='Search....' />
            <div className='icon'>
            <SearchOutlined />
            </div>
        </div>
        <nav className="header_nav">
           <li>
            <Link to={"/dangnhap"}>Login</Link>
           </li>
           <li>
            <Link to={"/dangky"}>Register</Link>
           </li>
           <li>
           <ShoppingCartOutlined  className='iconC'/>
           </li>
        </nav>
        <div className="header_bart">
        <UserOutlined />
        <MenuOutlined />
        </div>

        
    </div>
  )
}

export default Header