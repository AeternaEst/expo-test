import React from "react";
import {
  View,
} from "react-native";
import {
  ResizeMode,
  Video
} from "expo-av";

const WORKS_ON_IOS_AND_ANDROID = "https://dl.dropbox.com/scl/fi/2jlkb2lbi5rmkuthhxkq7/big_buck_bunny.mp4?rlkey=ym7izlz30nf8x5nprfbaxb2ym&st=u9qf49kp&dl=1";
const ONLY_WORKS_ON_ANDROID_1 = "https://www.dropbox.com/scl/fi/n8ibuy40pjqsuzhqc6xxy/Clipchamp.mp4?rlkey=oe2c71w77cmes77q9wb5amiu5&st=ckvwx9w7&dl=1";
const ONLY_WORKS_ON_ANDROID_2 = "https://www.dropbox.com/scl/fi/38llzdxwk2y90jyyj9knw/Youtube.mp4?rlkey=f5875yaczl7qjb53j4k31r06s&st=fcghxqdd&dl=1"

export default function HomeScreen() {
  const video = React.useRef<Video>(null);

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={video}
        style={{
          alignSelf: "center",
          width: "100%",
          maxWidth: 800,
          height: 200
        }}
        source={{
          uri: ONLY_WORKS_ON_ANDROID_1
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        onError={(error) => console.log("Error during video playback", error)}
        
      />
    </View>
  );
}
