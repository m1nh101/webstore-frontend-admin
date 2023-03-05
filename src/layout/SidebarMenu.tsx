import { faChartLine, faCodeBranch, faLayerGroup, faNewspaper, faStore, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuTheme } from "antd"
import { MenuMode } from "rc-menu/lib/interface"
import { Link } from "react-router-dom";
import { getMenuItem, MenuItem } from "../common/menu";

type SidebarMenuProp = {
  mode: MenuMode
  defaultSelectedKeys: Array<string>,
  items: Array<MenuItem>,
  theme: MenuTheme
}

const menuItems = [
  getMenuItem(<Link to='dashboard'>Dashboard</Link>, <FontAwesomeIcon icon={faChartLine} />),
  getMenuItem(<Link to='products'>Sản phẩm</Link>, <FontAwesomeIcon icon={faLayerGroup} />, [
    getMenuItem(<Link to='variants'>Thương hiệu</Link>, <FontAwesomeIcon icon={faCodeBranch}/>),
    getMenuItem(<Link to='products'>Sản phẩm</Link>, <FontAwesomeIcon icon={faStore}/>),
  ]),
  getMenuItem(<Link to='sales'>Khuyễn mãi</Link>, <FontAwesomeIcon icon={faTag}/>),
  getMenuItem(<Link to='orders'>Đơn hàng</Link>, <FontAwesomeIcon icon={faNewspaper}/>),
]

const sidebarMenuProp: SidebarMenuProp = {
  mode: 'inline',
  defaultSelectedKeys: ['1'],
  items: menuItems,
  theme: 'dark'
}

const SidebarMenu: React.FC = () => {
  return (
    <Menu {...sidebarMenuProp}></Menu>
  )
}

export default SidebarMenu;