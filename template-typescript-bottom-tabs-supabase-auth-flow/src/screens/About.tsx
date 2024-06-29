import React from "react";
import { View } from "react-native";
import { MainStackParamList, MainTabsParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text, TopNav, themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import TimeTrackerForm from "../components/forms/TimeTrackerForm";

export default function ({
    navigation,
    // }: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
}: NativeStackScreenProps<MainTabsParamList, "About">) {
    const { isDarkmode, setTheme } = useTheme();
    return (
        <Layout>
            <TopNav
                middleContent="About"
                rightContent={
                    <Ionicons
                        name={isDarkmode ? "sunny" : "moon"}
                        size={20}
                        color={isDarkmode ? themeColor.white100 : themeColor.dark}
                    />
                }
                rightAction={() => {
                    if (isDarkmode) {
                        setTheme("light");
                    } else {
                        setTheme("dark");
                    }
                }}
            />
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TimeTrackerForm />
            </View>
        </Layout>
    );
}
