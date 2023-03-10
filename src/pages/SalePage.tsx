import { Button, Space, Tag } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import React, { useState } from "react";
import { SaleFlag, SaleItem } from "../common/type";
import SaleFormModal from "../components/modals/SaleFormModal";

const renderDate = (value: Date, _record: SaleItem, _index: number): string => {
  return dayjs(value).format('DD/MM/YYYY');
}

const renderFlag = (value: SaleFlag, _record: SaleItem, _index: number): React.ReactNode => {
  if (value === 0)
    return <Tag color='purple'>Sắp diễn ra</Tag>

  if (value === 1)
    return <Tag color='green'>Đang diễn ra</Tag>

  return <Tag color='red'>Đã kết thúc</Tag>
}

const renderButton = (_value: unknown, record: SaleItem, _index: number): React.ReactNode => {
  return (
    <Space direction="horizontal">
      <Button type='primary' >Sửa</Button>
      <Button type='primary' danger>Xóa</Button>
    </Space>
  )
}

const columns: ColumnsType<SaleItem> = [
  {
    title: 'STT',
    render: (_, __, index) => index + 1
  },
  {
    title: 'Ngày bắt đầu',
    dataIndex: 'startDate',
    key: 'startDate',
    render: renderDate
  },
  {
    title: 'Ngày kết thúc',
    dataIndex: 'endDate',
    key: 'endDate',
    render: renderDate
  },
  {
    title: 'Giá trị khuyến mãi',
    dataIndex: 'value',
    key: 'value',
    render: (value: number) => value + '%'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: renderFlag
  },
  {
    title: 'Ngày cập nhật',
    dataIndex: 'updateAt',
    key: 'updateAt',
    render: renderDate
  }
]

const data: Array<SaleItem> = [
  {
    id: 1,
    startDate: new Date('2020-01-01'),
    endDate: new Date('2020-02-01'),
    value: 10,
    updateAt: new Date('2020-01-01'),
    status: 2,
  },
  {
    id: 2,
    startDate: new Date('2023-03-10'),
    endDate: new Date('2023-03-08'),
    value: 10,
    updateAt: new Date('2023-02-21'),
    status: 1
  },
  {
    id: 3,
    startDate: new Date('2023-03-015'),
    endDate: new Date('2023-03-31'),
    value: 15,
    updateAt: new Date('2023-03-01'),
    status: 0
  }
]

const SalePage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onHandleCreateClick = (): void => setShowModal(true);

  return (
    <React.Fragment>
      <Space align="end" style={{width: '100%', marginBottom: '16px'}}>
        <Button type="primary" size="large" onClick={onHandleCreateClick}>Tạo mới</Button>
      </Space>
      <Table columns={columns} dataSource={data} rowKey={(e) => e.id}/>

      <SaleFormModal visible={showModal}
        title='Tạo mới'
        changeVisible={setShowModal}
        />
    </React.Fragment>
  )
}

export default SalePage;