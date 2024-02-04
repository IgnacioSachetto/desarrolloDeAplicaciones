import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import ButtonPrimary from './ButtonPrimary';

const CartTaskList = ({ item, onHandlerModaDelete, screenWidth, updateTaskCompleted }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.title}>{`Título: ${item.title}`}</Text>
      <Text style={styles.description}>{`Descripción: ${item.description}`}</Text>
      <Text style={styles.dateTime}>{`Creada: ${item.createdAt}`}</Text>
      <Text style={styles.dateTime}>{`Actualizada: ${item.updatedAt}`}</Text>
      <View style={styles.completedContainer}>
        <Switch
          value={item.completed}
          onValueChange={() => updateTaskCompleted(item.id)}
          trackColor={{ false: '#767577', true: '#FFD700' }}
        />
        <Text style={styles.textCompleted}>{item.completed ? 'Completada' : 'Pendiente'}</Text>
      </View>
      <ButtonPrimary title='Eliminar' onPress={() => onHandlerModaDelete(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  dateTime: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  completedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  textCompleted: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 2,
  },
});

export default CartTaskList;
