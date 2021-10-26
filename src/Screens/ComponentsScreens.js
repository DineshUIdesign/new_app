import React from 'react'
import { Text, stylesheet, View } from 'react-native';

const componentsScreen = () => {
    return (
        <view>
            <Text style={styles.textStyle}>This is the components Screen </Text>
            <text>hello world</text>
        </view>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }

});


export default componentsScreen;