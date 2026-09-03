import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { font, theme as defaultTheme } from '../theme';

export default function SettingsScreen({
  colors = defaultTheme,
  lightOn,
  notificationsEnabled,
  setNotificationsEnabled,
  temperatureUnit,
  toggleLight,
  toggleTemperatureUnit,
}) {
  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.heading, { color: colors.ink }]}>Settings</Text>

      <View style={[styles.row, { borderBottomColor: colors.line }]}>
        <Text style={[styles.label, { color: colors.ink }]}>Notifications</Text>
        <Switch
          onValueChange={setNotificationsEnabled}
          thumbColor={colors.switchKnob}
          trackColor={{ false: '#a4a4a4', true: colors.green }}
          value={notificationsEnabled}
        />
      </View>

      <Pressable
        accessibilityLabel="Change temperature unit"
        accessibilityRole="button"
        onPress={toggleTemperatureUnit}
        style={({ pressed }) => [
          styles.row,
          { borderBottomColor: colors.line },
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.label, { color: colors.ink }]}>Temperature Unit</Text>
        <Text style={[styles.value, { color: colors.blue }]}>{temperatureUnit}</Text>
      </Pressable>

      <Pressable
        accessibilityLabel="Toggle app theme"
        accessibilityRole="button"
        onPress={toggleLight}
        style={({ pressed }) => [
          styles.themeCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.line,
            shadowColor: lightOn ? colors.gold : colors.blue,
          },
          pressed && styles.pressed,
        ]}
      >
        <View>
          <Text style={[styles.themeTitle, { color: colors.ink }]}>Light Scene</Text>
          <Text style={[styles.themeCopy, { color: colors.muted }]}>
            {lightOn ? 'Tap to dim the house' : 'Tap to brighten the house'}
          </Text>
        </View>
        <Text style={[styles.themeValue, { color: lightOn ? colors.gold : colors.blue }]}>
          {lightOn ? 'ON' : 'DARK'}
        </Text>
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
    fontFamily: font.family,
    fontSize: 35,
    fontWeight: '900',
    lineHeight: 42,
    marginBottom: 66,
  },
  row: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 70,
    width: '100%',
  },
  label: {
    flexShrink: 1,
    fontFamily: font.family,
    fontSize: 23,
    fontWeight: '900',
    lineHeight: 28,
    paddingRight: 16,
  },
  value: {
    fontFamily: font.family,
    fontSize: 18,
    fontWeight: '900',
  },
  themeCard: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1.2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    minHeight: 98,
    paddingHorizontal: 22,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  themeTitle: {
    fontFamily: font.family,
    fontSize: 21,
    fontWeight: '900',
    lineHeight: 26,
  },
  themeCopy: {
    fontFamily: font.family,
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 18,
    marginTop: 3,
  },
  themeValue: {
    fontFamily: font.family,
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 18,
  },
  pressed: {
    opacity: 0.55,
  },
});
