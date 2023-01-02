import { View, Text, Image, StyleSheet, StatusBar,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { TouchableHighlight } from "react-native-gesture-handler";
 
export default function Uidesign1() {
  const [image, setImage] = useState(require("./cooking.gif"));
  const [color,setColor] =useState("black")
  return (
    <View style={styles.back}>
      <StatusBar backgroundColor="black" />
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.left}>Other Faces</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.right}>See all</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-around",
        }}
      >
        <TouchableHighlight
          onPress={() => setImage(require("./cooking.gif"))}
          style={styles.to}
        >
          <Image style={styles.img1} source={require("./cooking.gif")} />
        </TouchableHighlight>
        <TouchableHighlight
           
          onPress={() => setImage(require("./img2.gif"))}
          style={styles.to}
        >
          <Image style={styles.img1} source={require("./img2.gif")} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setImage(require("./img3.gif"))}
          style={styles.to}
        >
          <Image style={styles.img1} source={require("./img3.gif")} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setImage(require("./img4.gif"))}
          style={styles.to}
        >
          <Image style={styles.img1} source={require("./img4.gif")} />
        </TouchableHighlight>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.cook} source={image} />
      </View>
      <View
        style={{
          marginTop: 50,
          alignSelf: "center",
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "green",
        }}
      >
        <View
          style={{
            marginTop: 5,
            alignSelf: "center",
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: "white",
          }}
        >
<TouchableOpacity  value={color} onPress={()=>setColor("pink")} >
          <Icon color={color}
            style={{ marginTop: 15, alignSelf: "center" }}
            name="heart"
            size={50}
          />
</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const height = getStatusBarHeight();
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#261F4D",
    width: "100%",
    height: "100%",
  },
  left: {
    color: "white",
    marginLeft: "10%",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  right: {
    color: "white",
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: "10%",
  },
  img1: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  to: {
    width: 70,
    height: 70,
    borderRadius: 35,
 backgroundColor:"black",
     
  },
  cook: {
    height: 400,
    width: 400,
    marginTop: 20,
  },
});
