import { MenuProps } from "antd";
import { v4 as guid } from 'uuid'

export type MenuItem = Required<MenuProps>['items'][number];

export const getMenuItem = (
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