import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get('window');

const size = ["S", "M", "L"];
const CoffeeDetailsScreen = ({ route,navigation }) => {
  const [activeSize, setActiveSize] = useState(null)
  const { cof } = route.params;

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: colors.dark
        }}
      >
        <SafeAreaView>
          <ImageBackground source={cof.image} style={{
            height: height / 2 + SPACING * 2,
            justifyContent: "space-between"
          }}
            imageStyle={{
              borderRadius: SPACING * 3,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: SPACING * 2 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" color={colors.light} size={SPACING * 2} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
              >
                <Ionicons name="heart" color={colors.light} size={SPACING * 2} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderRadius: SPACING * 2,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={80}
                tint="dark"
                style={{
                  padding: SPACING * 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      color: colors.white,
                      fontWeight: "600",
                      marginBottom: SPACING,
                    }}
                  >{cof.name}</Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.8,
                      color: colors["white-smoke"],
                      fontWeight: "500",
                      marginBottom: SPACING,
                    }}
                  >{cof.included}</Text>

                  <View style={{ flexDirection: 'row', marginTop: SPACING }}>
                    <Ionicons name="star" color={colors.primary} size={SPACING * 1.5} />
                    <Text style={{
                      color: colors.white,
                      marginLeft: SPACING
                    }}>{cof.rating}</Text>
                  </View>
                </View>
                <View style={{
                  width: "35%",
                  justifyContent: 'space-between'
                }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={{
                      padding: SPACING / 2,
                      backgroundColor: colors.dark,
                      borderRadius: SPACING,
                      width: SPACING * 5,
                      height: SPACING * 5,
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <Ionicons
                        name="cafe"
                        size={SPACING * 2}
                        color={colors.primary}
                      />
                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: SPACING
                        }}
                      >coffee</Text>
                    </View>

                    <View style={{
                      padding: SPACING / 2,
                      backgroundColor: colors.dark,
                      width: SPACING * 5,
                      borderRadius: SPACING,
                      height: SPACING * 5,
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <Ionicons
                        name="water"
                        size={SPACING * 2}
                        color={colors.primary}
                      />

                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: SPACING
                        }}
                      >Milk</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: colors.dark,
                      padding: SPACING / 2,
                      borderRadius: SPACING / 2,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: colors["white-smoke"],
                        fontSize: SPACING * 1.3
                      }}
                    >Medium roasted</Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>

          <View style={{
            padding: SPACING
          }}>
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: SPACING * 1.7,
                marginBottom: SPACING
              }}
            >Description</Text>
            <Text
              style={{
                color: colors.white,
              }}
              numberOfLines={3}
            >{cof.description}</Text>
            <View
              style={{
                marginVertical: SPACING * 2,
              }}
            >
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: SPACING * 1.7,
                  marginBottom: SPACING
                }}
              >Size</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                {size.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setActiveSize(index)}
                    key={index}
                    style={[{
                      borderWidth: 2,
                      paddingVertical: SPACING / 2,
                      borderRadius: SPACING,
                      backgroundColor: colors.darkLight,
                      width: width / 3 - SPACING * 2,
                      alignItems: 'center',
                    }, activeSize === index && {
                      borderColor: colors.primary,
                      backgroundColor: colors.dark

                    }]}
                  >
                    <Text
                      style={[{
                        color: colors["white-smoke"],
                        fontSize: SPACING * 1.9,
                      },
                      activeSize === index && {
                        color: colors.primary
                      }
                      ]}
                    >{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <SafeAreaView
        style={{
          backgroundColor: colors.dark,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <View style={{ padding: SPACING,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: SPACING * 3
         }}>
          <Text style={{ color: colors.white, fontSize:SPACING * 1.5 }}>Price</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: colors.primary, fontSize: SPACING * 2 }}>$</Text>
            <Text style={{ color: colors.white, fontSize: SPACING * 1.7, marginLeft: SPACING / 2 }}>{cof.price}</Text>
          </View>
        </View>
        <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          width:width/2 + SPACING * 3,
          marginRight: SPACING, 
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SPACING *2,
        }}
        >
          <Text
            style={{ color: colors.white,fontSize:SPACING*2, fontWeight:'700' }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>

  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});
