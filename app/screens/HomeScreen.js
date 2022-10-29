import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import { useState } from "react";
const avatar = require("../../assets/avatar.jpg");
const { width } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [activeCategoryId, setActiveCategoryId] = useState(null);
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark
    }}>
    <SafeAreaView>
      <ScrollView
        style={{
          padding: SPACING,
        }}
      >
        <View style={{

          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView

              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >

              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />

            </BlurView>
          </TouchableOpacity>

          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: SPACING / 2,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SPACING * 2,
                }}
                source={avatar} />
            </BlurView>
          </View>
        </View>

        <View style={{
          width: "80%",
          marginVertical: SPACING * 3,
        }}>
          <Text style={{
            color: colors.white,
            fontSize: SPACING * 3.5,
            fontWeight: "600",
          }}>Find the best coffee for you</Text>


        </View>

        <SearchField />
        <Categories onChange={(id) => setActiveCategoryId(id)}/>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {
            coffees.filter((coffee) => {
              if(activeCategoryId === null) {
                return true
              }
              return coffee.categoryId === activeCategoryId
            }).map((coffee, i) =>
              <View key={coffee.id}
                style={{
                  width: width / 2 - SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 150
                    }}
                  >
                    <Image source={coffee.image} style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: SPACING * 2,
                    }} />

                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        borderTopEndRadius: SPACING * 2,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                        }}
                      >
                        <Ionicons
                          style={{
                            marginRight: SPACING / 2,
                          }}
                          name="star" color={colors.primary} size={SPACING * 1.7} />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING / 2,
                          }}
                        >{coffee.rating}</Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>

                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white, fontWeight: "600", fontSize: SPACING * 1.7, marginTop: SPACING, marginBottom: SPACING / 2
                    }}>{coffee.name}</Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: colors.secondary, fontSize: SPACING * 1.2 }}>{coffee.included}</Text>

                  <View
                    style={{
                      marginVertical: SPACING / 2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: colors.primary, marginRight: SPACING / 2, fontSize: SPACING * 1.6 }}>$</Text>
                      <Text style={{ color: colors.white, fontSize: SPACING * 1.6 }}>{coffee.price}</Text>
                    </View>

                    <TouchableOpacity
                    style={{
                      backgroundColor: colors.primary,
                      padding: SPACING / 2,
                      borderRadius: SPACING ,
                    }}
                    >
                      <Ionicons 

                        name="add" color={colors.white} size={SPACING * 2} 
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
