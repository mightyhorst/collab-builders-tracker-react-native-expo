import React from "react";
import { View, Linking } from "react-native";
import { MainStackParamList, MainTabsParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {
    Layout,
    Button,
    Text,
    TopNav,
    Section,
    SectionContent,
    useTheme,
    themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import {
    ProjectPlanForm,
} from "../components/forms";

export default function ({
    navigation,
// }: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
}: NativeStackScreenProps<MainTabsParamList, "Home">) {
    const { isDarkmode, setTheme } = useTheme();
    return (
        <Layout>
            <TopNav
                middleContent="Home"
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
                <ProjectPlanForm />
            </View>
        </Layout>
    );
}
