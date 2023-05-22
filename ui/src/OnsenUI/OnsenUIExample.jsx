import React from "react";
import ButtonExample from "./ButtonExample";
import { Page } from "react-onsenui";
import ActioActionSheetExample from "./ActionSheetExample";
import FebExample from "./FebExample";
import CheckBoxExample from "./CheckBoxExample";
import ListExample from "./ListExample";
import ProgressExample from "./ProgressExample";

export default function OnsenUIExample() {
  return (
    <Page>
      <ProgressExample />
      <ListExample />
      <ActioActionSheetExample />
      <CheckBoxExample />
      <FebExample />
      {/* <ButtonExample /> */}
    </Page>
  );
}
