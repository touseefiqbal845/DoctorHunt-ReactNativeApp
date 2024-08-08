import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomInput = ({
  placeholder,
  fontSize,
  marginBottom,
  fontColor,
  isPassword,
  icon,
  iconPosition,
  onIconPress,
  endIcon,
  emailverified
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);

  const handleIconPress = () => {
    if (isPassword) {
      setIsPasswordVisible(!isPasswordVisible);
    }
    if (onIconPress) {
      onIconPress();
    }
    if(emailverified){
        tickIcon();
    }
  };

  return (
    <View style={[styles.container, { marginBottom: marginBottom || 15}]}>

      {icon && iconPosition === 'start' && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name={icon} size={24} color={fontColor || '#000'} style={[{padding:5}]}/>
        </TouchableOpacity>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={fontColor || '#000'}
        secureTextEntry={isPassword && !isPasswordVisible}
        style={[styles.input, { fontSize: fontSize || 16, color: fontColor || '#677294' }]}
      />
        {icon && iconPosition === 'end' && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name={icon} size={24} color={fontColor || '#000'} style={[{padding:5}]}/>
        </TouchableOpacity> 
      )}
      {endIcon && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name={endIcon} size={24} color={fontColor || '#000'} style={[{padding:5}]}/>
        </TouchableOpacity>
      )}
      {emailverified && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name={emailverified} size={24} color={fontColor || '#000'} style={[{padding:5}]}/>
        </TouchableOpacity>
      )}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#677294',
    borderRadius: 12,
    padding: 5,
    height: 54, 

  },
  input: {
    flex: 1,
    padding:10,
  },
});

export default CustomInput;
