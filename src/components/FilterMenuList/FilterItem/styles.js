import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
    filter: {
        borderRadius: 16.5,
        backgroundColor: colors.gray,
        paddingHorizontal: 16,
        paddingVertical: 6,
        position: 'relative'
    },
    mark: {
        position: 'absolute',
        right: -8
    }
})