import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { Fragment } from "react";
import Drawer from "../components/Home/Drawer";
import Select from "../components/Home/Select";
import Advertiesment from "../components/Home/Advertiesment";
import Footer from "../components/Home/Footer";
import Products from "../components/Home/Products";
import Accordion from "../components/Home/Accordions";
export default function Home() {
  return (
    <Fragment>
      <Drawer />
      <Select />
      <Accordion />
      <Products />
      <Advertiesment />
      <Footer />
    </Fragment>
  );
}
