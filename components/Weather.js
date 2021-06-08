import React from "react";
import moment from "moment";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Weather({ hourlyData, location }) {
  const hourCard = hourlyData.map((obj) => (
    <View
      style={
        obj.index == moment().format("H") ? styles.hourCardNow : styles.hourCard
      }
      key={obj.index}
    >
      <View style={styles.hourCard__hour}>
        <Text style={styles.hourCard__hour__text}>
          {obj.index.toString().padStart(2, "0")}
        </Text>
      </View>
      <View style={styles.hourCard__temp}>
        <Image style={styles.hourCard__icon} source={{ uri: obj.tempYIcon }} />
        <Text style={styles.hourCard__temp__text}>{obj.tempY}°</Text>
      </View>
      <View style={styles.hourCard__diff}>
        <Text style={styles.hourCard__diff__text}>{obj.diffYT}</Text>
      </View>
      <View style={styles.hourCard__temp}>
        <Image style={styles.hourCard__icon} source={{ uri: obj.tempCIcon }} />
        <Text style={styles.hourCard__temp__text}>{obj.tempC}°</Text>
      </View>
      <View style={styles.hourCard__diff}>
        <Text style={styles.hourCard__diff__text}>{obj.diffTT}</Text>
      </View>
      <View style={styles.hourCard__temp}>
        <Image style={styles.hourCard__icon} source={{ uri: obj.tempTIcon }} />
        <Text style={styles.hourCard__temp__text}>{obj.tempT}°</Text>
      </View>
      <View style={styles.hourCard__hour}>
        <Text style={styles.hourCard__hour__text}>
          {obj.index.toString().padStart(2, "0")}
        </Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <Text style={styles.header__title}>beforecast°</Text>
          <Text style={styles.header__version}>v1.0.7 </Text>
        </View>
        <View style={styles.hourCardContainer}>{hourCard}</View>
      </View>
      <View>
        <Text style={styles.footer__location}>{location}</Text>
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
    borderRadius: 5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
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
    fontSize: 7,
    fontWeight: "300",
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
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "#EFEAF7",
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
  hourCard__hour__text: {
    color: "#c3b5dc",
    fontWeight: "300",
  },
  hourCard__temp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hourCard__temp__text: {
    color: "#737373",
    fontWeight: "300",
    fontSize: 16,
  },
  hourCard__diff: {
    flex: 1,
    alignItems: "center",
  },
  hourCard__diff__text: {
    color: "#737373",
    fontWeight: "300",
    fontStyle: "italic",
  },
  hourCard__icon: {
    width: 20,
    height: 20,
  },
  footer__location: {
    fontSize: 12,
    color: "#737373",
    fontWeight: "300",
  },
});
