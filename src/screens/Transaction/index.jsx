import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { getSingleTransaction } from '../../utils/transaction';
import styles from './styles';

const Transaction = () => {
  const [transaction, setTransaction] = useState < ITransaction > null;

  useEffect(() => {
    const getTransaction = async () => {
      try {
        const transaction = await getSingleTransaction();
        setTransaction(transaction);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    getTransaction();
  }, [transaction]);

  if (!transaction) {
    return <ActivityIndicator size={'large'} color={'black'} />;
  }

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        
      </View>
    </SafeAreaView>
  );
};

export default Transaction;
