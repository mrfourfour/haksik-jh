import { Platform, ViewStyle } from 'react-native';
function elevate(value: number, offset: number = 0): ViewStyle {
    return Platform.select<ViewStyle>({ 
        "ios": {
            shadowOpacity: 0.2,
            shadowColor: '#000000',
            shadowRadius: value,
        },
        "android": {
            elevation: value
        },
        "default": {
            elevation: value
        },
    })
}

export default elevate