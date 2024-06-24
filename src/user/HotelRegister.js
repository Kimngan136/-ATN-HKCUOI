import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Checkbox, Flex, Input, Col, Row } from 'antd';
import { DatePicker, Space, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { InputNumber, Select } from 'antd';

const checkbox = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const optionsTinh = [
  {
    value: 'Vũng Tàu',
    label: 'Vũng Tàu',

  },
  {
    value: 'TP Hồ Chí Minh',
    label: 'TP Hồ Chí Minh',

  },
];

const optionsHuyen = [
  {
    value: 'Châu Đức',
    label: 'Châu Đức',

  },
  {
    value: 'Tân Thành',
    label: 'Tân Thành',

  },
];

const optionsXa = [
  {
    value: 'An Ngãi',
    label: 'An Ngãi',

  },
  {
    value: 'Bình Trung',
    label: 'Bình Trung',

  },
];
const onChanger = (value) => {
  console.log(value);
};
const { TextArea } = Input;
const onChangeDeris = (e) => {
  console.log('Change:', e.target.value);
};

const HotelRegister = () => {

  return (

    <div className="body-booking">

      <div style={{ paddingBottom: 10, paddingTop: 20, marginLeft: 30, }}>
        <h3 >ĐĂNG KÝ KHÁCH SẠN CỦA BẠN</h3>

      </div>
      <div className="body-booking1">
        <div>
          <div className="Container-booking">
            <div className="booking1">
              <Flex vertical gap={12}>
                <label >Tên khách sạn của bạn: </label>
                <Input placeholder="" />
              </Flex>
              <Flex vertical gap={12}>
                <label >Tên khách sạn của bạn: </label>
                <Input placeholder="" />
              </Flex>
            </div>
            <div>
              <label>Số sao  <i class="fas fa-star bg-yellow-500 "></i>
                <i class="fas fa-star bg-yellow-500"></i>
                <i class="fas fa-star  bg-yellow-500 "></i>
                <i class="fas fa-star  bg-yellow-500 "></i>
                <i class="fas fa-star"></i>
              </label>
            </div>
            <div className="booking2">

              <div>
                <label >Tỉnh/Thành phố: </label>
                <Cascader options={optionsTinh} onChange={onChanger} placeholder="Please select" />

              </div>
              <div>
                <label >Quận/Huyện: </label>
                <Cascader options={optionsHuyen} onChange={onChanger} placeholder="Please select" />

              </div>
              <div>
                <label >Phường/Xã: </label>
                <Cascader options={optionsXa} onChange={onChanger} placeholder="Please select" />
              </div>

            </div>
            <div>
              <Flex vertical gap={12}>
                <label >Tên khách sạn của bạn: </label>
                <Input placeholder="" />
              </Flex>
            </div>
            <div className="booking3">
              <div>
                <label>Giờ Check In</label>
                <Space direction="vertical">
                  <DatePicker onChange={onChange} />
                </Space>
              </div>
              <div>
                <label>Giờ Check Out</label>
                <Space direction="vertical">
                  <DatePicker onChange={onChange} />
                </Space>
              </div>
            </div>
            <div>
              <label>Miêu tả:</label>
              <Flex vertical gap={32}>
                <TextArea showCount maxLength={100} onChange={onChangeDeris} placeholder="can resize" />

              </Flex>
            </div>

          </div>

        </div>
        <div>
          <div className="booking4">
            <div style={{ fontWeight: 'bold' }} > Chọn dịch vụ bao quát của khách sạn của bạn: </div>
            <Checkbox.Group
              style={{
                width: '100%',
              }}
              onChange={checkbox}
            >
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>                            </div>
          <div >
            <span style={{ fontWeight: 'bold' }}>Cho chúng tôi biết khoảng cách của khách sạn bạn:</span>
            <div className="booking2">

              <div>
                <label >Đến sân bay: </label>
                <Flex vertical gap={12}>
                  <Input placeholder="" />
                </Flex>
              </div>
              <div>
                <label >Đến biển: </label>
                <Flex vertical gap={12}>
                  <Input placeholder="" />
                </Flex>
              </div>
              <div>
                <label >Đến trung tâm thành phố: </label>
                <Flex vertical gap={12}>
                  <Input placeholder="" />
                </Flex>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
export default HotelRegister;