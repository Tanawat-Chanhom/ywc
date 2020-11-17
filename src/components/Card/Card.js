import React, { Component } from "react";
import styles from "./Card.module.css";
import { Tag } from "antd";

import Baht from "../../assets/images/thailand-baht.svg";
import BahtGray from "../../assets/images/thailand-baht-gray.svg";
import Car from "../../assets/images/car.png";
import Reserve from "../../assets/images/reserve.png";
import Animal from "../../assets/images/animal.png";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  bahtList = () => {
    let priceLevel = this.state.data.priceLevel;
    let bahtList = [];
    for (let index = 0; index < priceLevel; index++) {
      bahtList.push(<img src={Baht} key={index + "0"} alt="baht" />);
    }
    for (let index = 0; index < 4 - priceLevel; index++) {
      bahtList.push(<img src={BahtGray} key={index + "1"} alt="baht" />);
    }
    return bahtList.map((data) => {
      return data;
    });
  };

  render() {
    let data = this.state.data;
    return (
      <div className={styles.container}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${data.coverImageId})` }}
        ></div>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <h5>{data.shopNameTH}</h5>
              <Tag
                color={data.isOpen === "Y" ? "#87d068" : "gray"}
                className="mx-3"
                style={{ height: "fit-content" }}
              >
                {data.isOpen === "Y" ? "เปิดอยู่" : "ปิดแล้ว"}
              </Tag>
            </div>
            <div className={styles.detail}>
              <div>{data.subcategoryName}</div>
              <div className="mx-3">|</div>
              <div className={styles.bahtIcon}>{this.bahtList()}</div>
              <div className="mx-3">|</div>
              <div>
                {data.addressDistrictName} {data.addressProvinceName}
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.detail}>
            <div dangerouslySetInnerHTML={{ __html: data.highlightText }} />
          </div>
          <div className={styles.detail} style={{ marginTop: 8 }}>
            <div style={{ fontWeight: "bold", color: "#111" }}>เมนูแนะนำ:</div>
            {data.recommendedItems.map((name, index) => {
              return (
                <div className="ml-1" key={index}>
                  {name}
                  {data.recommendedItems.length > index + 1 ? "," : ""}
                </div>
              );
            })}
          </div>
          <div className={styles.facilitaes}>
            {data.facilities.map((data, index) => {
              switch (data) {
                case "ที่จอดรถ":
                  return (
                    <img
                      src={Car}
                      key={index}
                      alt="car"
                      className={styles.iconFacility}
                    />
                  );
                case "รับจองล่วงหน้า":
                  return (
                    <img
                      src={Reserve}
                      alt="car"
                      key={index}
                      className={styles.iconFacility}
                    />
                  );
                case "สามารถนำสัตว์เลี้ยงเข้าได้":
                  return (
                    <img
                      src={Animal}
                      alt="car"
                      key={index}
                      className={styles.iconFacility}
                    />
                  );
                default:
                  break;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

// addressDistrictName: "เขตธนบุรี"
// addressProvinceName: "กรุงเทพมหานคร"
// categoryName: "งานบริการอื่นๆ / เบ็ดเตล็ด"
// coverImageId: "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
// facilities: ["ที่จอดรถ"]
// highlightText: "<strong>ร้านทุกอย่าง</strong> โต๊ะ ตู้ เตียง"
// isOpen: "Y"
// priceLevel: 1
// recommendedItems: (3) ["แจกัน", "จานชาม", "เก้าอี้สามขา"]
// shopNameTH: "Kanysorn Cafe"
// subcategoryName: "สินค้า และ บริการ เกี่ยวกับการตกแต่งบ้าน"
