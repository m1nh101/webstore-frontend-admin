import { faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Popover, Space } from "antd"
import { RenderFunction } from "antd/es/tooltip"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const UserOptions: RenderFunction = () => {
  const { logout } = useAuth();

  return (
    <Space direction="vertical">
      <Link to="/login" onClick={logout}>Đăng xuất</Link>
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