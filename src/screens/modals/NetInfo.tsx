import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

interface NetInfoProps {
  isVisible: boolean;
}

const NetInfo: React.FC<NetInfoProps> = ({ isVisible }) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      style={{ borderWidth: 1, flex: 1 }}
    >
      <View style={styles.parent}>
        <Text style={styles.txtStyle}>No Internet Connection</Text>
      </View>
    </Modal>
  );
}

export default NetInfo;

const styles = StyleSheet.create({
  parent: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    zIndex: 60,
    alignSelf: 'center',
  },
  txtStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
