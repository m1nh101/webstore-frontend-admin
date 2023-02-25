import { Menu, MenuTheme } from "antd"
import { MenuMode } from "rc-menu/lib/interface"
import { getMenuItem, MenuItem } from "../common/menu"
import NotificationBox from "../components/headers/NotificationBox"
import UserPopOver from "../components/headers/UserPopOver"
import styles from './layout.module.scss'

type HeaderNavigationBarProp = {
  mode: MenuMode,
  theme: MenuTheme,
  items: Array<MenuItem>,
  selectable: boolean
}

const items: Array<MenuItem> = [
  getMenuItem('', <NotificationBox />),
  getMenuItem('', <UserPopOver />)
]

const headerNaviationProps: HeaderNavigationBarProp = {
  mode: 'horizontal',
  theme: 'dark',
  items: items,
  selectable: false
}

const HeaderNavigationBar: React.FC = () => {
  return <Menu className={styles.header_menu_flex_end} {...headerNaviationProps} />
}

export default HeaderNavigationBar;