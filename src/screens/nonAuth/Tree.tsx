import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SolidView from '../components/SolidView';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../constants/fonts';
import MainHeader from '../components/MainHeader/MainHeader';

export default function Tree() {
  const navigation = useNavigation();
  const { colors, images } = useTheme();
  const styles = useStyles(colors);

  const FamilyMember = ({ name, relation, image }) => (
    <View style={styles.member}>
      <FastImage source={image} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.relation}>{relation}</Text>
    </View>
  );

  return (
    <SolidView
      linear
      view={
        <View style={styles.container}>
          <MainHeader tittleOne="Tree" />
          
          <View style={styles.topRow}>
            <FamilyMember name="John Doe" relation="Father" image={images?.group1} />
            <FamilyMember name="Jenna Doe" relation="Mother" image={images?.group2} />
          </View>

          {/* Horizontal Line */}
          <View style={styles.horizontalLine} />

          {/* Children */}
          <View style={styles.bottomRow}>
            <FamilyMember name="John Doe" relation="Son" image={images?.group3} />
            <View style={styles.verticalLine} />
            <FamilyMember name="Jenna Doe" relation="Daughter" image={images?.group4} />
            <View style={styles.verticalLine} />
            <FamilyMember name="John Doe" relation="Lorem Ipsum" image={images?.group3} />
          </View>

          {/* Add Floating Action Button */}
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
}

const useStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  member: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: AppFonts.SemiBold,
    color: colors?.text,
  },
  relation: {
    fontSize: 12,
    color: 'gray',
  },
  verticalLine: {
    width: 2,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    height: 50,
    marginHorizontal: 10,
  },
  horizontalLine: {
    width: '80%', // Width of the line (can be adjusted)
    height: 2,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    alignSelf: 'center',
    marginBottom: 10, // Adjust spacing as needed
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 24,
    color: '#fff',
  },
});
