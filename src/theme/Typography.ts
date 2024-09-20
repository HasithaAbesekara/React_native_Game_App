import { StyleSheet } from "react-native";
import Fonts from "./Fonts";
import Dimensions from "./Dimensions";
import Colors from "./Colors";



type TypographyStyle={
    LABEL:any;
    BUTTON:any;
}

export const Typography =StyleSheet.create<TypographyStyle | any>({
    LABEL:{
        l_1:{
            fontFamily:Fonts.OPENSANS_BOLD,
            fontSize:18*Dimensions.RESPONSIVE_HEIGHT,
            color:Colors.Blue_1,
            textAlign: 'center',
        },
        l_2:{
            fontFamily:Fonts.OPENSANS_REGULAR,
            fontSize:28*Dimensions.RESPONSIVE_HEIGHT,
            color:Colors.Blue_2
        },
        l_3:{
            fontFamily:Fonts.OPENSANS_REGULAR,
            fontSize:18*Dimensions.RESPONSIVE_HEIGHT,
            color:Colors.WHITE,
            textAlign: 'center',
            marginBottom: 24,
            
        }
    }
})