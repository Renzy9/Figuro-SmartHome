import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import DeviceListItem from '../components/DeviceListItem';
import { font, theme as defaultTheme } from '../theme';

const displayTemperature = (temperature, unit) => {
  if (unit === '°F') {
    return `${Math.round((temperature * 9) / 5 + 32)}°F`;
  }

  return `${temperature}°C`;
};

export default function DevicesScreen({
  cameraOn,
  colors = defaultTheme,
  doorLocked,
  lightOn,
  temperature,
  temperatureUnit,
}) {
  const devices = [
    {
      accent: lightOn ? colors.gold : colors.muted,
      icon: <Ionicons name={lightOn ? 'bulb' : 'bulb-outline'} size={25} color="#ffffff" />,
      id: 'light',
      location: lightOn ? 'Living Room' : 'Night Scene',
      name: 'Light',
      value: lightOn ? 'ON' : 'OFF',
    },
    {
      accent: colors.cyan,
      icon: <Ionicons name="snow" size={27} color="#ffffff" />,
      id: 'air-conditioner',
      location: 'Living Room',
      name: 'Air Conditioner',
      value: displayTemperature(temperature - 2, temperatureUnit),
    },
    {
      accent: doorLocked ? colors.blue : colors.rose,
      icon: <FontAwesome5 name={doorLocked ? 'lock' : 'unlock'} size={23} color="#ffffff" />,
      id: 'door',
      location: 'Front Door',
      name: 'Door',
      value: doorLocked ? 'LOCKED' : 'OPEN',
    },
    {
      accent: cameraOn ? colors.green : colors.muted,
      icon: <Ionicons name={cameraOn ? 'camera' : 'camera-outline'} size={27} color="#ffffff" />,
      id: 'camera',
      location: 'Entry View',
      name: 'Camera',
      value: cameraOn ? 'ON' : 'OFF',
    },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.heading, { color: colors.ink }]}>My Devices</Text>

      <View style={styles.list}>
        {devices.map((device) => (
          <DeviceListItem
            accent={device.accent}
            colors={colors}
            icon={device.icon}
            key={device.id}
            location={device.location}
            name={device.name}
            value={device.value}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 64,
  },
  heading: {
    fontFamily: font.family,
    fontSize: 35,
    fontWeight: '900',
    lineHeight: 42,
    marginBottom: 29,
  },
  list: {
    gap: 13,
  },
});
