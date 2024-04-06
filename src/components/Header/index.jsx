import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = ({ goBack, heading }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerFlex}>
        <Pressable onPress={goBack}>
          <AntDesign name="arrowleft" size={22} color="black" />
        </Pressable>
        <Text style={styles.headerText}>{heading}</Text>
      </View>
    </View>
  );
};

export default Header;
