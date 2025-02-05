import { Menu } from 'antd';
import { HomeOutlined ,SelectOutlined,NotificationOutlined,HistoryOutlined,LogoutOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const MenuList = ({darkTheme}) => {
    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'} mode ="inline" className="menu-bar">
          <Link to="/DStatus"><Menu.Item key="dashboard" icon={ <HomeOutlined />}>
             Dashboard
            </Menu.Item></Link>
            

             <Link to="/DoctorAppointment"><Menu.Item key="appointment" icon={ <SelectOutlined />}>
             Appointments
            </Menu.Item>
            </Link>
            
            <Link to="/DoctorNotification"><Menu.Item key="notification" icon={ <NotificationOutlined />}>
             Notifications
            </Menu.Item></Link>
             
            {/* <Link to="/DoctorHistory"><Menu.Item key="history" icon={ <HistoryOutlined />}>
             History
            </Menu.Item>
            </Link> */}

            <Link to="/DoctorDashboard"><Menu.Item key="logout" icon={ <LogoutOutlined /> }>
             Logout
            </Menu.Item></Link>
            
        </Menu>
    )
}
export default MenuList