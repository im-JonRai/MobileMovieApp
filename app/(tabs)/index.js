import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import React from 'react'

const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  return (

    <View className="flex-1 bg-neutral-800">
      {/*search bar and logo*/}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style='light' />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white" />
          <Text style={{ color: 'orange', fontSize: 24, fontWeight: 'bold' }}>
            M
          </Text><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}


