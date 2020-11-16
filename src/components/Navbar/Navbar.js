import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { Input, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import KLK from "../../assets/images/logo-KLK.png";
import Logo from "../../assets/images/logo-KLK-2.png";
import SearchIcon from "../../assets/images/search.svg";
import FIlter from "../../assets/images/filter.png";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      selectName: "พื้นที่ใกล้ฉัน",
      selectList: ["พื้นที่ใกล้ฉัน", "สถานที่ทั้งหมด"],
    };
  }

  select = () => (
    <Select
      className={styles.selection}
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
      {this.props.provinces.map((data, index) => (
        <option value={data}>{data}</option>
      ))}
    </Select>
  );

  search = () => (
    <div className={styles.searchIcon}>
      <img src={SearchIcon} alt="SearchIcon" />
    </div>
  );

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={KLK} alt="KLK" className={styles.logo1} />
          <img src={Logo} alt="KLK" className={styles.logo2} />
        </div>
        <div className={styles.inputContainer}>
          <Input
            addonBefore={this.select()}
            suffix={this.search()}
            size="large"
            placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
          />
        </div>
        <div className={styles.filterContainer}>
          <img src={FIlter} alt="Search" />
        </div>
      </div>
    );
  }
}
