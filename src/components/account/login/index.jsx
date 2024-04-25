import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '@services/login';
import styles from '../index.style.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      const userID = await AsyncStorage.getItem('userID');
      const userName = await AsyncStorage.getItem('userName');
      const expoPushToken = await AsyncStorage.getItem('pushToken');
      const access = await AsyncStorage.getItem('access');
      const refresh = await AsyncStorage.getItem('refresh');
      if (userID && userName && expoPushToken && access && refresh){
        router.push('/home');
      }
    };
  
    initialize();
  }, []);

  const handleSignup = () => {
    router.push('/signup');
  };
  const returnToStore = () => {
    router.push('/home');
  };
  const onSubmit = async () => {
    const res = await login({ username, password });
    if (res.success) {
      await AsyncStorage.setItem('access', res.access);
      await AsyncStorage.setItem('refresh', res.refresh);
      const userID = JSON.stringify(res.user.id);
      await AsyncStorage.setItem('userName', res.user.username);
      if (res.user.expo_push_token){
        await AsyncStorage.setItem('pushToken', res.user.expo_push_token);
      }
      await AsyncStorage.setItem('userID', userID);
      router.push(`/home`)
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Don't have an account yet?{' '}
          <Text style={styles.link} onPress={handleSignup}>
            Create account
          </Text>
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            onChangeText={setUsername}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.returnStore} onPress={returnToStore}>
            Return to Store
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;