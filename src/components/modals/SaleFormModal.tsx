import { DatePicker, Form, Input } from "antd";
import Modal from "antd/es/modal/Modal";
import dayjs from "dayjs";
import Select from "rc-select";
import { ChangeEvent, useState } from "react";
import { SaleModal, SalePayload } from "../../common/type";

const { RangePicker } = DatePicker

const initialValue: SalePayload = {
  id: 0,
  startDate: dayjs(),
  endDate: dayjs(),
  value: 0,
  products: []
}

const SaleFormModal: React.FC<SaleModal> = ({
  visible, changeVisible, onSubmit, title
}) => {
  const [payload, setPayload] = useState<SalePayload>(initialValue);

  const handleCancle = (): void => changeVisible(false);

  const handleDateChange = (dates: any, dateStrings: [string, string]) => {
    setPayload({
      ...payload,
      startDate: dayjs(dateStrings[0]),
      endDate: dayjs(dateStrings[1])
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPayload({
      ...payload,
      [event.target.name]: event.target.value
    });
  };

  const handleSelectChange = (value: Array<string>): void => {
   setPayload({
    ...payload,
    products: value
   }); 
  };

  return(
    <Modal title={title}
      open={visible}
      onCancel={handleCancle}
      cancelText='Hủy'
      okText='Tạo'
      >
      <Form>
        <Form.Item label='Thời gian'>
          <RangePicker allowClear
            placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
            format='DD/MM/YYYY'
            onChange={handleDateChange}
            style={{width: '100%'}}/>
        </Form.Item>
        <Form.Item label='Giá trị'>
          <Input type='number' name="value" onChange={handleInputChange}/>
        </Form.Item>
        <Form.Item label='Sản phẩm áp dụng'>
          <Select
            mode="multiple"
            allowClear
            onChange={handleSelectChange}/>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default SaleFormModal;