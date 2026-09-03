import { StyleSheet, Text, View } from 'react-native';

import DeviceListItem from '../components/DeviceListItem';
import { font, theme } from '../theme';

const devices = [
  {
    id: 'light',
    location: 'Living Room',
    name: 'Light',
    value: 'ON',
  },
  {
    id: 'air-conditioner',
    location: 'Living Room',
    name: 'Air Conditioner',
    value: '24°C',
  },
];

export default function DevicesScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>My Devices</Text>

      <View style={styles.list}>
        {devices.map((device) => (
          <DeviceListItem
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
    color: theme.ink,
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
