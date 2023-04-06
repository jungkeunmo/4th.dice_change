import { React, useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
} from "react-native";

const App = () => {
  const [cn, setCn] = useState(0);
  const color = [];

  const checkHandler = () => {
    const ran = Math.floor(Math.random() * 6);
    if (ran === cn) {
      checkHandler();
    } else {
      return setCn(ran);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          width: 150,
          height: 150,
          margin: 10,
          borderRadius: 8,
        }}
        source={requir(cn)}
      ></ImageBackground>
      <View>
        <Button
          style={{
            color: "#000",
          }}
          title="버튼"
          onPress={() => checkHandler()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
