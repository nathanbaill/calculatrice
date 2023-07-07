import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
export interface IItem {
  value: string;
}


const Button: React.FC = () => {
    return(
        <button>
          {value}
        </button>
    );
};

const styles = StyleSheet.create({
 button: {
 borderStyle: "solid",
 borderWidth: 0,
 backgroundColor: "rgb(80, 60, 209)",
 fontSize: 24,
 color: "rgb(255, 255, 255)",
 fontWeight: "bold",
 borderRadius: 10,
 padding: 10,
 alignItems: "center",
 justifyContent: "center",
 margin: 5,
 },
 buttonEquals: {
 gridColumn: "3 / 5",
 backgroundColor: "rgb(243, 61, 29)",
 },
 text: {
 textAlign: "center",
 },
});

export default Button;