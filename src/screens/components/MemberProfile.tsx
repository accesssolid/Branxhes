import React from 'react';
import { View, Text, StyleSheet, FlatList, ViewStyle, TextStyle, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { hp, wp } from '../../utils/dimension';
import AppFonts from '../../constants/fonts';
import { LocalizationContext } from '../../localization/localization';
import { useNavigation, useTheme } from '@react-navigation/native';
import TittleTextComp from './TittleComponent/TittleTextComp';

interface Member {
    id: string;
    name: string;
    relation: string;
    image: any;
}
interface MemberListProps {
    persons: Member[];
    horizontal?: boolean,
    titleOne?: string;
    titleTwo?: string;
    changeColor?: boolean;
    viewStyle?: ViewStyle;
    txtStyle?: TextStyle;
    onpressTxt?: () => void;
    onpress?: () => void;
}

const MemberList: React.FC<MemberListProps> = ({ persons,onpress, horizontal, titleOne, titleTwo, changeColor, txtStyle, onpressTxt, viewStyle }) => {
    const { colors } = useTheme() as any;
    const styles = useStyles(colors) as any;

    const renderItem = ({ item }: { item: Member }) => (

        <View style={styles.container}>
            <FastImage source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.relation}>{item.relation}</Text>
        </View>

    );

    return (

        <Pressable onPress={onpress}
         style={[styles.edusty2, { backgroundColor: changeColor ? colors.backgroundCol3 : "white" }, viewStyle]}>

            {(titleOne || titleTwo) && (
                <TittleTextComp
                    tittleOne={titleOne}
                    onPress={onpressTxt}
                    tittleTwo={titleTwo}
                    textStyle={txtStyle}
                    viewStyle={{ marginVertical: 5, paddingHorizontal: 0 }}
                />
            )}

            <FlatList
                data={persons}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContent}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </Pressable>
    );
};


const useStyles = (colors: any) => StyleSheet.create({
    edusty2: {
        width: "90%",
        borderRadius: 10,
        shadowColor: colors.shadowCol,
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 0 },
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.backgroundWhite,
        marginBottom: 5,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    image: {
        height: hp(7.8),
        width: wp(16.8),
    }, name: {
        fontSize: 10,
        fontFamily: AppFonts.SemiBold,
        textAlign: "center",
        color: colors.shadowCol
    },
    relation: {
        fontSize: 8,
        fontFamily: AppFonts.Medium,
        textAlign: "center",
        color: colors.textGrey
    },
    flatListContent: {
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default MemberList;