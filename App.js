import { useMemo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DashboardScreen from './src/screens/DashboardScreen';
import DevicesScreen from './src/screens/DevicesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { font, themes } from './src/theme';

const Stack = createNativeStackNavigator();

function AppHeader({ back, colors, navigation, options }) {
  return (
    <SafeAreaView edges={['top']} style={[styles.headerSafe, { backgroundColor: colors.header }]}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.header,
            borderBottomColor: colors.headerShadow,
          },
        ]}
      >
        {back ? (
          <Pressable
            accessibilityLabel="Go back"
            accessibilityRole="button"
            onPress={navigation.goBack}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="arrow-back" size={28} color={colors.ink} />
          </Pressable>
        ) : null}

        <Text style={[styles.headerTitle, { color: colors.ink }, !back && styles.homeHeaderTitle]}>
          {options.title}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const [lightOn, setLightOn] = useState(true);
  const [temperature, setTemperature] = useState(26);
  const [temperatureUnit, setTemperatureUnit] = useState('°C');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [doorLocked, setDoorLocked] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  const colors = lightOn ? themes.light : themes.dark;

  const appState = useMemo(
    () => ({
      cameraOn,
      colors,
      doorLocked,
      lightOn,
      notificationsEnabled,
      temperature,
      temperatureUnit,
      decreaseTemperature: () => setTemperature((current) => Math.max(16, current - 1)),
      increaseTemperature: () => setTemperature((current) => Math.min(32, current + 1)),
      setNotificationsEnabled,
      toggleCamera: () => setCameraOn((current) => !current),
      toggleDoor: () => setDoorLocked((current) => !current),
      toggleLight: () => setLightOn((current) => !current),
      toggleTemperatureUnit: () =>
        setTemperatureUnit((currentUnit) => (currentUnit === '°C' ? '°F' : '°C')),
    }),
    [
      cameraOn,
      colors,
      doorLocked,
      lightOn,
      notificationsEnabled,
      temperature,
      temperatureUnit,
    ],
  );

  return (
    <SafeAreaProvider>
      <StatusBar style={lightOn ? 'dark' : 'light'} backgroundColor={colors.header} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            contentStyle: { backgroundColor: colors.background },
            header: (props) => <AppHeader {...props} colors={colors} />,
          }}
        >
          <Stack.Screen
            name="Dashboard"
            options={{ title: 'Smart Home' }}
          >
            {(props) => <DashboardScreen {...props} {...appState} />}
          </Stack.Screen>
          <Stack.Screen name="Settings" options={{ title: 'Settings' }}>
            {(props) => <SettingsScreen {...props} {...appState} />}
          </Stack.Screen>
          <Stack.Screen name="Devices" options={{ title: 'Devices' }}>
            {(props) => <DevicesScreen {...props} {...appState} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: themes.light.header,
  },
  header: {
    height: 72,
    alignItems: 'center',
    backgroundColor: themes.light.header,
    borderBottomColor: themes.light.headerShadow,
    borderBottomWidth: 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    alignItems: 'center',
    height: 54,
    justifyContent: 'center',
    marginLeft: 14,
    width: 44,
  },
  pressed: {
    opacity: 0.5,
  },
  headerTitle: {
    color: themes.light.ink,
    fontFamily: font.family,
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 18,
  },
  homeHeaderTitle: {
    marginLeft: 22,
  },
});
