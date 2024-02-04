import React, { useRef, useState } from 'react';
import { Dimensions, Keyboard, StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import AddTask from './src/components/AddTask';
import ListTasks from './src/components/ListTasks';
import ModalDeleteTask from './src/components/ModalDeleteTask';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  const flatListRef = useRef();

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      completed: false,
      title: taskTitle,
      description: taskDescription,
    };

    setPendingTasks([...pendingTasks, newTask]);
    setTaskDescription('');
    setTaskTitle('');
    Keyboard.dismiss();
  };

  const onHandlerTitle = (t) => {
    setTaskTitle(t);
  };

  const onHandlerDescription = (t) => {
    setTaskDescription(t);
  };

  const onHandlerModaDelete = (task) => {
    setTaskSelected(task);
    setModalVisible(!modalVisible);
  };

  const deleteTask = () => {
    const updatedPendingTasks = pendingTasks.filter((task) => task.id !== taskSelected.id);
    const updatedCompletedTasks = completedTasks.filter((task) => task.id !== taskSelected.id);

    setPendingTasks(updatedPendingTasks);
    setCompletedTasks(updatedCompletedTasks);
    setModalVisible(!modalVisible);
  };

  const updateTaskCompleted = (id) => {
    const taskToUpdatePending = pendingTasks.find((task) => task.id === id);
    const taskToUpdateCompleted = completedTasks.find((task) => task.id === id);

    if (taskToUpdatePending) {
      const updatedPendingTasks = pendingTasks.filter((task) => task.id !== id);
      const updatedCompletedTasks = [...completedTasks, { ...taskToUpdatePending, completed: true }];

      setPendingTasks(updatedPendingTasks);
      setCompletedTasks(updatedCompletedTasks);
    } else if (taskToUpdateCompleted) {
      const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
      const updatedPendingTasks = [...pendingTasks, { ...taskToUpdateCompleted, completed: false }];

      setPendingTasks(updatedPendingTasks);
      setCompletedTasks(updatedCompletedTasks);
    }

    flatListRef.current && flatListRef.current.scrollToIndex({ animated: true, index: 0 });
  };

  return (
    <View style={styles.container}>
      <AddTask
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        taskDescription={taskDescription}
        onHandlerDescription={onHandlerDescription}
        addTask={addTask}
      />
      <Text style={styles.sectionTitle}>Pendientes</Text>
      <ListTasks
        ref={flatListRef}
        tasks={pendingTasks}
        onHandlerModaDelete={onHandlerModaDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
      <Text style={[styles.sectionTitle, { marginTop: 5 }]}>Completadas</Text>
      <ListTasks
        tasks={completedTasks}
        onHandlerModaDelete={onHandlerModaDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
      <ModalDeleteTask
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        onHandlerModaDelete={onHandlerModaDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700',
    flex: 1,
    paddingTop: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
  },
});

export default App;
