import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Popover } from "antd";

const NotificationBox: React.FC = () => {
  return (
    <Popover>
      <Badge count={1}>
        <Avatar size={32} icon={ <FontAwesomeIcon icon={faComment} size="2x" />}/>
      </Badge>
    </Popover>
  )
}

export default NotificationBox;