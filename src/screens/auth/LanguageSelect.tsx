import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import { hp } from "../../utils/dimension";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import DorpdownComp from "../components/DropdownComp";
import LogoComp from "../components/logoComp";
import AppRoutes from "../../routes/RouteKeys/appRoutes";

type Props = {};

const LanguageSelect = (props: Props) => {
  const { localization } = useContext(LocalizationContext) as any;
  const { colors, images } = useTheme() as any;
  const styles = useStyles(colors) as any;
  const navigation: any = useNavigation();

  const [signupData, setSignupData] = useState<Object>({
    whatLanguage: ""
  });

  const inputHandler = (name: string, value: any) => {
    setSignupData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dataList2 = [
    { detailSelectText: "English" },
    { detailSelectText: "Spanish" },
    { detailSelectText: "Russian" }
  ];


  return (
    <SolidView
       linear
      view={
        <View style={styles.mainContainer}>

         <LogoComp 
         viewStyle={{marginTop:20}}/>

          <Text style={styles.labelSty}>Choose your Language</Text>

          <Text style={styles.topText}>Please Select Language Before Continue</Text>
          <DorpdownComp
            dataList={dataList2}
            tittleTextOne={localization.appkeys.ageRange}
            mainTittle={"English"}
            viewStyle={{ marginTop: hp(4), alignSelf: "center" }}
            selectedOption={(value: string) => inputHandler('whatLanguage', value)}
          />

          <AppButton
            titleTxt="Next"
            btnStyle={styles.btnSty}
            onPress={()=>navigation.navigate(AppRoutes.Onboarding)}

          />
        </View>
      }
    />
  );
};

export default LanguageSelect;

const useStyles = (colors: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "center",
      paddingTop: 25
    },
    labelSty: {
      fontSize: 22,
      fontFamily: AppFonts.Bold,
      color: colors.textBlack,
      marginTop: 20,
    },
    topText: {
      fontSize: 16,
      fontFamily: AppFonts.Regular,
      color: colors.textBlack,
      marginTop: 10
    },
    btnSty: {
      position: "absolute",
      bottom: 50
    }
  });
