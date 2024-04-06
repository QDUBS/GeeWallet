import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "./styles";
import Transaction from "../../components/Transaction";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getAllTransactions } from "../../utils/transaction";

const Transactions = ({ navigation }) => {
  const { openDrawer } = navigation;
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const transactions = await getAllTransactions();
      setTransactions(transactions);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [transactions]);

  if (!transactions) {
    return <ActivityIndicator size={"large"} color={"black"} />;
  }

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Header */}
        <View style={styles.homeHeader}>
          <View style={styles.navbar}>
            <Pressable onPress={openDrawer} style={styles.menu_button}>
              <SimpleLineIcons name={"menu"} color="#000000" size={18} />
            </Pressable>

            <View style={styles.row}>
              <Pressable
                onPress={() => navigation.navigate(AppRoutes.Profile)}
                style={{ marginRight: 10 }}
              >
                <Ionicons name={"person-sharp"} color="#000000" size={18} />
              </Pressable>
            </View>
          </View>

          <View style={styles.homeSearchContainer}>
            <TextInput
              style={styles.homeSearchInput}
              placeholder="Search..."
              placeholderTextColor="#333"
            />
            <FontAwesome name="search" size={15} color={"#666"} />
          </View>
        </View>

        <View style={styles.content}>
          {transactions.length > 0 ? (
            <>
              {transactions.map((transaction) => (
                <Transaction transaction={transaction} />
              ))}
            </>
          ) : (
            <View></View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;
