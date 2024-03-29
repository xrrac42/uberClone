import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideOptions from '../components/RideOptions';
import NavigateCard from '../components/NavigateCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; 


const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  const navigation= useNavigation()
  return (

    <SafeAreaView>
      <TouchableOpacity  onPress={()=> navigation.navigate("HomeScreen")} style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full
      shadow-lg`}>
        <Icon name='menu'/>
      </TouchableOpacity>
      <View style={tw`h-1/2`}> 
      <Map/>
       </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
          name='NavigateCard'
          component={NavigateCard} options={{
            headerShown: false
          }}/>
          <Stack.Screen
          name='RideOptions'
          component={RideOptions} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})