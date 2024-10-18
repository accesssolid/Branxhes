import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

interface SolidViewProps {
  viewStyle?: object;
  isScrollEnabled?: boolean;
  view: React.ReactNode;
  backgroundImage?: any;
  linear?: boolean;
}

const SolidView: React.FC<SolidViewProps> = ({
  viewStyle,
  view,
  isScrollEnabled,
  backgroundImage,
  linear,
}) => {
  const { colors } = useTheme();
  const styles = style(colors);

  return (
    <LinearGradient
      style={[styles.parent, viewStyle]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0 }}
      locations={[0, 1]}
      colors={
        linear ? ["rgba(96, 141, 121, 0)", "rgba(95, 139, 122, 0.1)"] : [colors.background, colors.background]
      }
    >
      {backgroundImage && (
        <Image source={backgroundImage} style={styles.absolutePosition} />
      )}
      {isScrollEnabled ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ flex: 1 }}
        >
          <SafeAreaView style={{ flex: 1 }}>{view}</SafeAreaView>
        </ScrollView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>{view}</SafeAreaView>
      )}
    </LinearGradient>
  );
};

const style = (colors: any) => StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.backGroundWhite
  },
  absolutePosition: {
    flex: 1, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0
  }
});


export default SolidView;
