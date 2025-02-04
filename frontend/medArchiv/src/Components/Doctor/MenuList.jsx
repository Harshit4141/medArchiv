import { Menu } from 'antd';
import { HomeOutlined ,SelectOutlined,NotificationOutlined,HistoryOutlined,LogoutOutlined
} from '@ant-design/icons';

const MenuList = ({darkTheme}) => {
    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'} mode ="inline" className="menu-bar">
            <Menu.Item key="dashboard home" icon={ <HomeOutlined />}>
             Dashboard Home
            </Menu.Item>
             <Menu.Item key="appointment" icon={ <SelectOutlined />}>
             Appointments
            </Menu.Item>
             <Menu.Item key="notification" icon={ <NotificationOutlined />}>
             Notifications
            </Menu.Item>
             <Menu.Item key="history" icon={ <HistoryOutlined />}>
             History
            </Menu.Item>
            <Menu.Item key="logout" icon={ <LogoutOutlined /> }>
             Logout
            </Menu.Item>
        </Menu>
    )
}
export default MenuList