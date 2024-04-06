import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {AllCategories} from '../../data/categories';
import {createTransaction} from '../../utils/transaction';
import styles from './styles';
import Header from '../../components/Header';

const NewTransaction = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('groceries');

  const handleAddTransaction = () => {
    const newTransaction = {
      amount,
      description,
      category,
      date,
    };

    createTransaction(newTransaction);

    setAmount('');
    setDescription('');
    setDate(new Date());
    setCategory('');
  };

  const handleDateChange = date => {
    const newDate = new Date(date);
    setDate(newDate);
  };

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.container}>
        {/* Header */}
        <Header goBack={() => {}} heading="New Transaction" />

        {/* Form */}
        <View style={styles.form}>
          {/* Amount */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Amount</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              value={amount.toString()}
              onChangeText={text => setAmount(Number(text))}
              keyboardType="numeric"
            />
          </View>

          {/* Description */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Description</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>

          {/* Category */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Category</Text>
            <Picker
              selectedValue={category}
              style={styles.pickerContainer}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
              {AllCategories.map(category => {
                <Picker.Item label={category.label} value={category.value} />;
              })}
            </Picker>
          </View>

          {/* Date */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Date</Text>
            <DatePicker
              style={styles.datePicker}
              date={date}
              mode="date"
              placeholder="Select Date"
              format="YYYY-MM-DD"
              minDate="2010-01-01"
              maxDate="2030-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={handleDateChange}
            />
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleAddTransaction}>
              <Text style={styles.buttonText}>Add Transaction</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTransaction;
