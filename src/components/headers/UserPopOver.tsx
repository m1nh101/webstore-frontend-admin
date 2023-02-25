import { faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Popover, Space } from "antd"
import { RenderFunction } from "antd/es/tooltip"

const userOptions: RenderFunction = () => {
  return (
    <Space direction="vertical">
      <p>Đăng xuất</p>
    </Space>
  )
}

const UserPopOver: React.FC = () => {
  return (
    <Popover content={userOptions} trigger={["click", "hover"]}>
      <Avatar size={32} icon={<FontAwesomeIcon icon={faUserNinja } size="2x" />}/>
    </Popover>
  )
}

export default UserPopOver;