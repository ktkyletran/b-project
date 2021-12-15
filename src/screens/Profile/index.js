import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Auth } from 'aws-amplify';
import styles from './styles'

const Profile = () => {
  const logout = () => {
    Auth.signOut();
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.authBtn} onPress={logout}>
        <Text style={{textAlign: 'center'}}>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default Profile
