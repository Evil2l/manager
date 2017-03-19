import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const { containerStyle, inputStyles, labelStyles} = styles;

  return (
      <View style={containerStyle}>
          <Text style={labelStyles}>{label}</Text>
          <TextInput
            secureTextEntry={secureTextEntry}
            style={inputStyles}
            value = {value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            autoCorrect={false}
            underlineColorAndroid='transparent'
          />
      </View>
  )
};

const styles = {
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyles: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyles: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export {Input};