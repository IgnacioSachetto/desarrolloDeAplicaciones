import { AntDesign } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Dimensions, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../utils/globals/colors';

const Search = ({ handlerKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const screenWidth = Dimensions.get('window').width;

  const handlerInput = (text) => setInput(text);

  const search = () => {
    const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (expression.test(input)) {
      setError("Caracteres no válidos");
      return;
    }
    setError("");
    handlerKeyword(input);
    Keyboard.dismiss();
  };

  const resetSearch = () => {
    handlerKeyword("");
    setInput("");
    setError("");
  };

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <TextInput
        placeholder='Buscar'
        value={input}
        onChangeText={handlerInput}
        style={styles.input}
      />
      <Pressable onPress={search} style={styles.iconButton}>
        <AntDesign name='search1' size={24} color="black" />
      </Pressable>
      <Pressable onPress={resetSearch} style={styles.iconButton}>
        <AntDesign name='closecircle' size={24} color="black" />
      </Pressable>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.yellowPage,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 10,
    color: 'black',
  },
  iconButton: {
    padding: 8,
    borderRadius: 5,
    color: 'black',
    backgroundColor: colors.yellowPage,
  },
  errorText: {
    color: "red",
    paddingHorizontal: 10,
    marginTop: 5,
  },
});
