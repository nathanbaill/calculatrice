import { Textfit } from "react-native";
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';

const Screen = () => {
    const[value, View] = useState<View[]>([]);
    return (
    <Textfit style={styles.container}>
      {value}
    </Textfit>
)};

const styles = StyleSheet.create({

});

export default Screen;