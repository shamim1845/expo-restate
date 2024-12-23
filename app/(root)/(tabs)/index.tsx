import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10 font-rubik ">
        Welcome to ReState
      </Text>
      <View className="space-y-10">
        <Link className="text-lg font-rubik-bold" href={"/sign-in"}>
          <Text>Sign In</Text>
        </Link>
        <Link className="text-lg font-rubik-bold" href={"/explore"}>
          <Text>Explore</Text>
        </Link>
        <Link className="text-lg font-rubik-bold" href={"/profile"}>
          <Text>Profile</Text>
        </Link>
        <Link className="text-lg font-rubik-bold" href={"/properties/1"}>
          <Text>Property</Text>
        </Link>
      </View>
    </View>
  );
}
