import { Image, TouchableOpacity, StyleSheet } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 12 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
