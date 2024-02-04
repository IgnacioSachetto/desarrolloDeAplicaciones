import React, { forwardRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CartTaskList from './CartTaskList';

const ListTasks = forwardRef(({ tasks, onHandlerModaDelete, screenWidth, updateTaskCompleted }, ref) => {
  return (
    <View style={styles.tasksContainer}>
      {!tasks || tasks.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>No hay tareas</Text>
        </View>
      ) : (
        <FlatList
          ref={ref}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: screenWidth, marginBottom: 20 }}>
              <CartTaskList
                item={item}
                onHandlerModaDelete={onHandlerModaDelete}
                screenWidth={screenWidth}
                updateTaskCompleted={updateTaskCompleted}
              />
            </View>
          )}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    padding: 0,
    marginVertical: 0,
  },
  noTasksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTasksText: {
    fontSize: 18,
    color: 'black',
  },
});

export default ListTasks;
