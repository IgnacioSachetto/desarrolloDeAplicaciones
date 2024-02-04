import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ButtonPrimary from './ButtonPrimary';

const AddTask = ({
  taskTitle,
  onHandlerTitle,
  taskDescription,
  onHandlerDescription,
  addTask,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={taskTitle}
          onChangeText={onHandlerTitle}
          placeholder='Ingresar Tarea'
          placeholderTextColor='#FFD700'
          maxLength={25}
          style={styles.input}
        />
        <TextInput
          value={taskDescription}
          onChangeText={onHandlerDescription}
          placeholder='Ingresar descripción'
          placeholderTextColor='#FFD700'
          multiline
          numberOfLines={4}
          maxLength={100}
          style={[styles.input, styles.textArea]}
        />
      </View>
      <ButtonPrimary
        title='Agregar Tarea'
        onPress={() => {
          addTask();
          onHandlerDescription('');
        }}
      />
    </View>
  );
};


export default AddTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    borderRadius: 10,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#FFD700',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  textArea: {
    height: 80,
  },
});
