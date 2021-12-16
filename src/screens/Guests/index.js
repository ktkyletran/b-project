import React, { useState } from 'react'
import styles from './styles'
import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{marginTop: 10, justifyContent: 'space-between', height: '100%'}}>
      <View>
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
      <View>
        <Pressable style={styles.nextBtn} onPress={() => navigation.navigate('SearchResults', {
          guests: adults + children,
          viewport: route.params.viewport,
          locationLat: route.params.locationLat,
          locationLng: route.params.locationLng,
        })}>
          <Text style={styles.nextText}>Search</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Guests
