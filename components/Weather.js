import React from "react";
import moment from "moment";
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
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <Text style={styles.header__title}>beforecast°</Text>
          <Text style={styles.header__version}>v1.0.5 </Text>
        </View>
        <View style={styles.hourCardContainer}>{hourCard}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F2F0",
    paddingTop: 30,
    paddingBottom: 30,
  },
  subcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#EBEAE8",
  },
  header: {
    flexDirection: "row",
    width: 300,
    backgroundColor: "#654EA5",
    marginBottom: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header__title: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 8,
  },
  header__version: {
    color: "#FFFFFF",
    fontSize: 1,
  },
  hourCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hourCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    marginVertical: 0.5,
  },
  hourCardNow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    marginVertical: 0.5,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#EFEAF7",
  },
  hourCard__hour: {
    flex: 0.8,
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
