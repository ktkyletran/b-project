import React, { useState } from 'react'
import styles from './styles'
import { View, Text, Pressable } from 'react-native'

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  return (
    <View style={{marginTop: 10}}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Adults</Text>
          <Text style={styles.age}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setAdults(Math.max(0, adults - 1))} style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{adults}</Text>
          <Pressable onPress={() => setAdults(Math.max(0, adults + 1))} style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Children</Text>
          <Text style={styles.age}>Ages 2-12</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setChildren(Math.max(0, children - 1))} style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{children}</Text>
          <Pressable onPress={() => setChildren(Math.max(0, children + 1))} style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Infants</Text>
          <Text style={styles.age}>Ages 2 and under</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setInfant(Math.max(0, infant - 1))} style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{infant}</Text>
          <Pressable onPress={() => setInfant(Math.max(0, infant + 1))} style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Guests
