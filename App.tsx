import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import Wrapper from "./src/components/Wrapper";
import Screen from "./src/components/Screen";
import ButtonBox from "./src/components/ButtonBox";
import Button from "./src/components/Button";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>

  );
};

export default App;