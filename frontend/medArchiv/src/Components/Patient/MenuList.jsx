import { Menu } from 'antd';
import { HomeOutlined ,SelectOutlined,NotificationOutlined,HistoryOutlined,LogoutOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const MenuList = ({darkTheme}) => {
    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'} mode ="inline" className="menu-bar">
          <Link to="/AdminPanel"><Menu.Item key="AdminPanel" icon={ <HomeOutlined />}>
             Dashboard
            </Menu.Item></Link>
            
            <Link to="/FindDoctor"><Menu.Item key="FindDoctor" icon={ <SelectOutlined />}>
            FindDoctor
            </Menu.Item>
            </Link>

             <Link to="/PatientAppointment"><Menu.Item key="appointment" icon={ <SelectOutlined />}>
             Appointments
            </Menu.Item>
            </Link>
            
            <Link to="/PatientNotification"><Menu.Item key="notification" icon={ <NotificationOutlined />}>
             Notifications
             </Menu.Item>
             </Link>
             
             <Link to="/PatientDashboard"><Menu.Item key="PatientDashboard" icon={ <SelectOutlined /> }>
             Patient Dashboard
             </Menu.Item>
             </Link>

             <Link to="/ForgotPassword"><Menu.Item key="ForgotPassword" icon={ <SelectOutlined /> }>
             Forgot Password
             </Menu.Item>
             </Link>
             
            {/* <Link to="/PatientRecord"><Menu.Item key="history" icon={ <HistoryOutlined />}>
            Record
            </Menu.Item>
            </Link> */}

            <Link to="/Logout"><Menu.Item key="logout" icon={ <LogoutOutlined /> }>
             Logout
            </Menu.Item></Link>
            
        </Menu>
    )
}
export default MenuList