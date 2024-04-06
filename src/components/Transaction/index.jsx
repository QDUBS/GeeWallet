import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import date from "../../utils/date";

const Transaction = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.id}>No {transaction?.id}</Text>
        <Text style={styles.amount}>
          {transaction?.category} &#8226; &#x20A6;{" "}
          {transaction?.amount.toLocaleString()}
        </Text>
        <Text style={styles.time}>
          {date.getMonthDaysMinutesDuration(transaction?.date?.toString())}
        </Text>
      </View>
      <Pressable onPress={() => {}} style={styles.button}>
        <AntDesign name="arrowleft" size={18} color="black" />
      </Pressable>
    </View>
  );
};

export default Transaction;
