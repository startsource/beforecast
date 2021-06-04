import moment from "moment";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Weather({ hourlyData }) {
  const hourCard = hourlyData.map((obj) => (
    <View
      style={
        obj.index == moment().format("H") ? styles.hourCardNow : styles.hourCard
      }
      key={obj.index}
    >
      <View style={styles.hourCard__hour}>
        <Text>{obj.index.toString().padStart(2, "0")}</Text>
      </View>
      <View style={styles.hourCard__temp}>
        <Image style={styles.hourCard__icon} source={{ uri: obj.tempYIcon }} />
        <Text>{obj.tempY}°</Text>
      </View>
      <View style={styles.hourCard__diff}>
        <Text>{obj.diffYT}</Text>
      </View>
      <View style={styles.hourCard__temp}>
        <Image style={styles.hourCard__icon} source={{ uri: obj.tempCIcon }} />
        <Text>{obj.tempC}°</Text>
      </View>
      <View style={styles.hourCard__diff}>
        <Text>{obj.diffTT}</Text>
      </View>
      <View style={styles.hourCard__temp}>
        <Image style={styles.hourCard__icon} source={{ uri: obj.tempTIcon }} />
        <Text>{obj.tempT}°</Text>
      </View>
      <View style={styles.hourCard__hour}>
        <Text>{obj.index.toString().padStart(2, "0")}</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.header__title}>⛅beforecast⛅</Text>
      <View style={styles.subcontainer}>
        <View style={styles.hourCard}>
          <View style={styles.hourCard__hour}>
            <Text>time</Text>
          </View>
          <View style={styles.hourCard__temp}>
            <Text>yesterday</Text>
          </View>
          <View style={styles.hourCard__diff}>
            <Text>diff</Text>
          </View>
          <View style={styles.hourCard__temp}>
            <Text>today</Text>
          </View>
          <View style={styles.hourCard__diff}>
            <Text>diff</Text>
          </View>
          <View style={styles.hourCard__temp}>
            <Text>Tomorrow</Text>
          </View>
          <View style={styles.hourCard__hour}>
            <Text>time</Text>
          </View>
        </View>
        {hourCard}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  header__title: {
    fontSize: 30,
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: "70%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "#FFFFFF",
  },
  hourCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  hourCardNow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderColor: "#ecf0f1",
  },
  hourCard__hour: {
    flex: 1,
    alignItems: "center",
  },
  hourCard__temp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hourCard__diff: {
    flex: 1,
    alignItems: "center",
  },
  hourCard__icon: {
    width: 20,
    height: 20,
  },
});
