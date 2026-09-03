import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { font, theme } from '../theme';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState('°C');

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((currentUnit) => (currentUnit === '°C' ? '°F' : '°C'));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch
          onValueChange={setNotificationsEnabled}
          thumbColor={theme.switchKnob}
          trackColor={{ false: '#a4a4a4', true: theme.blue }}
          value={notificationsEnabled}
        />
      </View>

      <Pressable
        accessibilityLabel="Change temperature unit"
        onPress={toggleTemperatureUnit}
        style={({ pressed }) => [styles.row, styles.unitRow, pressed && styles.pressed]}
      >
        <Text style={styles.label}>Temperature Unit</Text>
        <Text style={styles.value}>{temperatureUnit}</Text>
      </Pressable>
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
    marginBottom: 66,
  },
  row: {
    alignItems: 'center',
    borderBottomColor: theme.line,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 70,
    width: '100%',
  },
  unitRow: {
    marginTop: 0,
  },
  label: {
    color: theme.ink,
    flexShrink: 1,
    fontFamily: font.family,
    fontSize: 23,
    fontWeight: '900',
    lineHeight: 28,
    paddingRight: 16,
  },
  value: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 18,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.55,
  },
});
