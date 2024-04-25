import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { registerUser } from '@services/register';
import { useRouter } from 'expo-router'

import styles from '../index.style.js';

const Register = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [inviation, setInviation] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const confirmRegisterHandler = async () => {
        const res = await registerUser({
          username: username,
          email: email,
          password: password,
          inviation: inviation,
        });
        if (res.success) {
          router.push('/');
        }
    };
    const returnToStore = () => {
      router.push('/home');
    };
    const handleLogin = () => {
      router.push('/login');
    };
    return (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Already have an account?{' '}
              <Text style={styles.link} onPress={handleLogin}>
                Login
              </Text>
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={inviation}
                onChangeText={setInviation}
                placeholder="inviation"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirmed Password"
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={confirmRegisterHandler}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.returnStore} onPress={returnToStore}>
                Return to Store
              </Text>
            </View>
          </View>
        </View>
      );
    };

export default Register;
