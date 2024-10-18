import { View, Text, StyleSheet, TextStyle, Dimensions } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";

import FastImage from "react-native-fast-image";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import AppFonts from "../../constants/fonts";
import { LocalizationContext } from "../../localization/localization";

interface Props {
    data: {
        introImage?: any;
        introHeading?: string;
        introTxt?: string,
        nextScreen?: string;    
        introButtonOnPress?: () => void;
        navigation?: any,
        route?: any
      };        
    headingStyle ?: TextStyle;
    txtStyle ?: TextStyle;
    imgStyle ?: object;
}

const OnboardingComponent: React.FC<Props> = ({ data, headingStyle, txtStyle, imgStyle }) => {
  const { images, colors } = useTheme() as any;
  const { localization } = useContext(LocalizationContext) as any ;
  const styles = createStyles(colors);

  return (
                <View style={styles.contentContainer} >
                    <FastImage 
                    resizeMode="contain" 
                    source={data?.introImage} style={[styles.img, imgStyle]} />
                    
                    <View style={{
                        // marginTop: heightPercentageToDP(9), 
                        // marginBottom: heightPercentageToDP(9), 
                        // gap: heightPercentageToDP(0.7)
                         }} >
                        <Text style={[styles.heading, headingStyle ]} >{data.introHeading}</Text>
                        <Text style={[styles.txt, txtStyle ]} >{data.introTxt}</Text>
                        {/* <AppButton onPress={data?.introButtonOnPress} titleTxt={localization.appkeys.continue} btnStyle={{  width: '80%' , alignSelf:'center', marginTop: heightPercentageToDP(1.8)}} /> */}
                    </View>
                </View>
  )
};

const createStyles = (colors: any) => StyleSheet.create({
    container1:{
        backgroundColor: colors.background,
        flexDirection :'row',
        justifyContent: 'space-between',
    },
    pagingContainer:{
        flexDirection: 'row',
        alignItems:'center',
        gap : widthPercentageToDP(0.5)
    },
    pagingBox:{
        height: 3,
        width: 4,
        backgroundColor: colors.pagingBox
    },
    skipBtn:{
        color: colors.textBlack,
        fontFamily: AppFonts.SemiBold,
        fontSize: heightPercentageToDP(2)
    },
    contentContainer:{
        // backgroundColor : "green",
        // borderRadius: 50,
        // justifyContent: 'space-between',
        // marginTop: heightPercentageToDP(4),
        width: Dimensions.get('screen').width -40 ,
    },
    img:{
        width:"100%",
        height: heightPercentageToDP(28),
        alignSelf:'center',
        // marginTop: heightPercentageToDP(9)
    },
    heading: {
        fontFamily : AppFonts.Bold,
        fontSize : heightPercentageToDP(3.05),
        textAlign:'center',
        alignSelf:'center'
    },
    txt:{
        fontFamily: AppFonts.SemiBold,
        fontSize: heightPercentageToDP(1.8),
        color: colors.textBlack,
        textAlign:'center',
        alignSelf:'center',
        width: '80%'
    }
});

export default OnboardingComponent;

