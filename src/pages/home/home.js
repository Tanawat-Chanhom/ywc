import React, { Component } from "react";
import axios from "axios";
import API from "../../util/API.json";
import styles from "./home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Navigation from "../../components/Navigation/Navigation";
import Aside from "../../components/Aside/Aside";
import Card from "../../components/Card/Card";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      merchants: [],
      priceRange: [],
      provinces: [],
      proSelect: "พื้นที่ใกล้ฉัน",
      categoryName: "ทั้งหมด",
    };
  }

  componentDidMount() {
    try {
      axios
        .get(API.API)
        .then((response) => {
          console.log(response);
          this.setState({
            categories: response.data.categories,
            merchants: response.data.merchants,
            priceRange: response.data.priceRange,
            provinces: response.data.provinces,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  setLocation = (locationName) => {
    this.setState({
      proSelect: locationName,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <header>
          <div className={styles.navbarContainer}>
            <Navbar
              provinces={this.state.provinces}
              proSelect={this.state.proSelect}
              setLocation={(e) => {
                this.setLocation(e);
              }}
            />
          </div>
          <div className={styles.navigationWrapper}>
            <Navigation />
          </div>
        </header>
        <div className={styles.content}>
          <div className={styles.searchResult}>
            ผลการค้นหา {this.state.categoryName}
          </div>
          <section className={styles.flexItem}>
            <Aside
              categories={this.state.categories}
              provinces={this.state.provinces}
              proSelect={this.state.proSelect}
              setLocation={(e) => {
                this.setLocation(e);
              }}
              priceRange={this.state.priceRange}
              category={(n) => {
                this.setState({
                  categoryName: n,
                });
              }}
            />
            <article className={styles.articleContainer}>
              {this.state.merchants.map((data, index) => {
                return <Card data={data} key={index} />;
              })}
            </article>
          </section>
        </div>
      </div>
    );
  }
}
