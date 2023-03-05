import { faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button, Popover, Space } from "antd"
import { RenderFunction } from "antd/es/tooltip"
import useAuth from "../../hooks/useAuth"

const UserOptions: RenderFunction = () => {
  const { logout } = useAuth();

  const onSignOutClick = (): void => logout();

  return (
    <Space direction="vertical">
      <Button onClick={onSignOutClick}>Đăng xuất</Button>
    </Space>
  )
}

const UserPopOver: React.FC = () => {
  return (
    <Popover content={UserOptions} trigger={["click", "hover"]}>
      <Avatar size={32} icon={<FontAwesomeIcon icon={faUserNinja } size="2x" />}/>
    </Popover>
  )
}

export default UserPopOver;