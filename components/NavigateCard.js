import { StyleSheet, Text, View, SafeAreaView, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native'; 
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';



const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`} >Good Morning, Carlos</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete
        styles={toInputBoxStyles}
        enablePoweredByContainer= {false}
        returnKeyType={"search"}
        minLength={2}
        fetchDetails={true}
        onPress={(data, details = null) =>{
            dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
            }))

            navigation.navigate('RideOptions')
        }}
        query={{
            key: GOOGLE_MAPS_KEY,
            language: "en"
        }}
        placeholder='Where to?'
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        />
        </View>
        <NavFavourites/>
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}> 
        <TouchableOpacity onPress={()=> navigation.navigate('RideOptions')} style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name="car" type='font-awesome' color="white" size={16} />
            <Text style={tw`text-white justify-between text-center`}> Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3`}>
            <Icon name="fast-food-outline" type='ionicon' color="black" size={16} />
            <Text style={tw`text-center`}> Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop:20,
        flex:0
    },
    textInput:{
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom:0
    }
})