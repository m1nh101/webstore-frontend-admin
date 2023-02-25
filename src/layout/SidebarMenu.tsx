import { faChartLine, faCodeBranch, faLayerGroup, faNewspaper, faStore, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuTheme } from "antd"
import { MenuMode } from "rc-menu/lib/interface"
import { getMenuItem, MenuItem } from "../common/menu";

type SidebarMenuProp = {
  mode: MenuMode
  defaultSelectedKeys: Array<string>,
  items: Array<MenuItem>,
  theme: MenuTheme
}

const menuItems = [
  getMenuItem('Dashboard', <FontAwesomeIcon icon={faChartLine} />),
  getMenuItem('Sản phẩm', <FontAwesomeIcon icon={faLayerGroup} />, [
    getMenuItem('Thương hiệu', <FontAwesomeIcon icon={faCodeBranch}/>),
    getMenuItem('Sản phẩm', <FontAwesomeIcon icon={faStore}/>),
  ]),
  getMenuItem('Khuyễn mãi', <FontAwesomeIcon icon={faTag}/>),
  getMenuItem('Đơn hàng', <FontAwesomeIcon icon={faNewspaper}/>),
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