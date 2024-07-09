import { useEffect } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function HomeScreen() {
  const windowWidth = Dimensions.get("window").width;

  const getOffsetXEndPosition = () => {
    return 1100 - windowWidth;
  };

  const offsetX = useSharedValue<number>(0);

  const animatedProps = useAnimatedProps(() => ({
    contentOffset: {
      x: offsetX.value,
      y: 0,
    },
  }));

  useEffect(() => {
    console.log("Starting slider animation");
    offsetX.value = withRepeat(
      withTiming(getOffsetXEndPosition(), {
        duration: 2500,
        easing: Easing.linear,
      }),
      -1,
      true
    );
  }, []);

  const generateBoxes = (): React.ReactElement[] => {
    return Array.apply(null, Array(10)).map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          marginRight: 10,
        }}
      />
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Remove this outer scrollview to make the touchables work on IOS */}
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.ScrollView
          onContentSizeChange={(width, height) => {
            console.log(width, height);
          }}
          horizontal
          contentContainerStyle={{ alignSelf: "center" }}
          animatedProps={animatedProps}
          showsHorizontalScrollIndicator={false}
        >
          {generateBoxes()}
        </Animated.ScrollView>

        <Pressable
          style={{
            backgroundColor: "green",
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => Alert.alert("Click")}
        >
          <Text>Alert</Text>
        </Pressable>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => Alert.alert("Click")}
        >
          <Text>Alert</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
