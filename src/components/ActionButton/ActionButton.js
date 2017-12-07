import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ActionButton({ iconName, backgroundColor, color, ...props }) {
    return (
        <View style={styles.container}>
            <Icon
                raised
                {...props}
                color={color}
                name={iconName}
                containerStyle={{backgroundColor}}
                iconStyle={styles.iconStyle}
                underlayColor={backgroundColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 16,
        bottom: 16
    },
    iconStyle: {
        fontSize: 32
    },
});