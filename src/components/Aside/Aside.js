import React, { Component } from "react";
import styles from "./Aside.module.css";
import { Radio, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

export default class Aside extends Component {
  constructor() {
    super();
    this.state = {
      subcategories: [],
    };
  }

  selectCategories = (name) => {
    this.props.category(name);
  };

  render() {
    return (
      <aside className={styles.container}>
        <div>
          <div className={styles.filterTitle} style={{ marginBottom: "1rem" }}>
            ประเภทร้านค้า
          </div>
          <div className={styles.radioSelection}>
            <Radio.Group
              onChange={(e) => {
                this.selectCategories(e.target.value);
              }}
              defaultValue={"ทั้งหมด"}
            >
              <Radio value={"ทั้งหมด"}>ทั้งหมด</Radio>
              {this.props.categories.map((data, index) => (
                <Radio
                  value={data.name}
                  key={index}
                  className={styles.radio}
                  onClick={() => {
                    this.setState({
                      subcategories: data.subcategories,
                    });
                  }}
                >
                  {data.name}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div className={styles.filterTitle}>จังหวัด/ใกล้ฉัน</div>
          <Select
            className={styles.select}
            value={this.props.proSelect}
            onChange={(e) => {
              this.props.setLocation(e);
            }}
          >
            <option value="พื้นที่ใกล้ฉัน">
              <EnvironmentOutlined />
              พื้นที่ใกล้ฉัน
            </option>
            <option value="สถานที่ทั้งหมด">
              <EnvironmentOutlined />
              สถานที่ทั้งหมด
            </option>
            {this.props.provinces.map((data, index) => {
              return (
                <option value={data} key={index}>
                  {data}
                </option>
              );
            })}
          </Select>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div className={styles.filterTitle}>ราคา</div>
          <Select className={styles.select} placeholder={"กรุณาเลือก"}>
            {this.props.priceRange.map((data, index) => {
              return (
                <option value={data} key={index}>
                  {data}
                </option>
              );
            })}
          </Select>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div className={styles.filterTitle} style={{ marginBottom: "1rem" }}>
            ประเภท
          </div>
          <Radio.Group
            onChange={(e) => {
              this.selectCategories(e.target.value);
            }}
            defaultValue={"ทั้งหมด"}
          >
            <Radio value={"ทั้งหมด"}>ทั้งหมด</Radio>
            {this.state.subcategories.map((data, index) => (
              <Radio value={data} key={index} className={styles.radio}>
                {data}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </aside>
    );
  }
}
