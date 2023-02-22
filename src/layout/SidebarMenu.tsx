import { faChartLine, faCodeBranch, faLayerGroup, faNewspaper, faStore, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuProps, MenuTheme } from "antd"
import { MenuMode } from "rc-menu/lib/interface"
import { v4 as guid } from 'uuid'

type MenuItem = Required<MenuProps>['items'][number];

type SidebarMenuProp = {
  mode: MenuMode
  defaultSelectedKeys: Array<string>,
  items: Array<MenuItem>,
  theme: MenuTheme
}

const getMenuItem = (
  label: React.ReactNode | string,
  icon?: React.ReactNode,
  children?: Array<MenuItem>,
  type?: 'group',
): MenuItem => {
  return {
    key: guid(),
    icon,
    children,
    label,
    type
  } as MenuItem;
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