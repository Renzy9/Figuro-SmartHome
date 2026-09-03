import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import DeviceTile from '../components/DeviceTile';
import { font, getTemperatureAccent, theme as defaultTheme } from '../theme';

const displayTemperature = (temperature, unit) => {
  if (unit === '°F') {
    return `${Math.round((temperature * 9) / 5 + 32)}°F`;
  }

  return `${temperature}°C`;
};

export default function DashboardScreen({
  cameraOn,
  colors = defaultTheme,
  decreaseTemperature,
  doorLocked,
  increaseTemperature,
  lightOn,
  navigation,
  temperature,
  temperatureUnit,
  toggleCamera,
  toggleDoor,
  toggleLight,
}) {
  const temperatureAccent = getTemperatureAccent(temperature);

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <View style={styles.titleRow}>
        <View>
          <Text style={[styles.heading, { color: colors.ink }]}>Smart Home</Text>
          <Text style={[styles.subtitle, { color: colors.muted }]}>
            {lightOn ? 'Living room lights are on' : 'Night mode is active'}
          </Text>
        </View>
        <Pressable
          accessibilityLabel="Open settings"
          accessibilityRole="button"
          onPress={() => navigation.navigate('Settings')}
          style={({ pressed }) => [styles.settingsButton, pressed && styles.pressed]}
        >
          <Ionicons name="settings-sharp" size={45} color={colors.blue} />
        </Pressable>
      </View>

      <View
        style={[
          styles.temperatureCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.line,
            shadowColor: temperatureAccent,
          },
        ]}
      >
        <View style={[styles.temperatureIcon, { backgroundColor: colors.cardAlt }]}>
          <FontAwesome5 name="thermometer-half" size={44} color={temperatureAccent} />
          <MaterialCommunityIcons
            name={temperature >= 28 ? 'weather-sunny' : 'snowflake'}
            size={28}
            color={temperature >= 28 ? colors.gold : colors.cyan}
            style={styles.snowflake}
          />
        </View>
        <Text style={[styles.temperature, { color: colors.ink }]}>
          {displayTemperature(temperature, temperatureUnit)}
        </Text>
        <Text style={[styles.room, { color: colors.ink }]}>Living Room</Text>
        <Text style={[styles.comfort, { color: colors.muted }]}>
          {temperature <= 21 ? 'Cool mode' : temperature >= 29 ? 'Warm mode' : 'Comfort mode'}
        </Text>

        <View style={styles.temperatureControls}>
          <Pressable
            accessibilityLabel="Decrease temperature"
            accessibilityRole="button"
            onPress={decreaseTemperature}
            style={({ pressed }) => [
              styles.temperatureButton,
              { backgroundColor: colors.cardAlt, borderColor: colors.line },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="remove" size={26} color={colors.ink} />
          </Pressable>
          <Pressable
            accessibilityLabel="Increase temperature"
            accessibilityRole="button"
            onPress={increaseTemperature}
            style={({ pressed }) => [
              styles.temperatureButton,
              { backgroundColor: colors.cardAlt, borderColor: colors.line },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="add" size={26} color={colors.ink} />
          </Pressable>
        </View>
      </View>

      <View style={styles.deviceGrid}>
        <DeviceTile
          accent={lightOn ? colors.gold : colors.muted}
          active={lightOn}
          colors={colors}
          icon={
            <Ionicons name={lightOn ? 'bulb' : 'bulb-outline'} size={31} color="#ffffff" />
          }
          name="Light"
          onPress={toggleLight}
          status={lightOn ? 'ON' : 'OFF'}
          detail="Tap for theme"
        />
        <DeviceTile
          accent={colors.cyan}
          active
          colors={colors}
          icon={<Ionicons name="snow" size={34} color="#ffffff" />}
          name="AC"
          onPress={decreaseTemperature}
          status={displayTemperature(temperature - 2, temperatureUnit)}
          detail="Tap to cool"
        />
        <DeviceTile
          accent={doorLocked ? colors.blue : colors.rose}
          active={doorLocked}
          colors={colors}
          icon={<FontAwesome5 name={doorLocked ? 'lock' : 'unlock'} size={31} color="#ffffff" />}
          name="Door"
          onPress={toggleDoor}
          status={doorLocked ? 'LOCKED' : 'OPEN'}
          detail="Tap lock"
        />
        <DeviceTile
          accent={cameraOn ? colors.green : colors.muted}
          active={cameraOn}
          colors={colors}
          icon={<Ionicons name={cameraOn ? 'camera' : 'camera-outline'} size={35} color="#ffffff" />}
          name="Camera"
          onPress={toggleCamera}
          status={cameraOn ? 'ON' : 'OFF'}
          detail="Tap power"
        />
      </View>

      <Pressable
        accessibilityLabel="View all devices"
        accessibilityRole="button"
        onPress={() => navigation.navigate('Devices')}
        style={({ pressed }) => [styles.viewAllButton, pressed && styles.pressed]}
      >
        <Text style={[styles.viewAllText, { color: colors.ink }]}>View All Devices</Text>
        <Ionicons name="arrow-forward" size={24} color={colors.ink} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 55,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    fontFamily: font.family,
    fontSize: 35,
    fontWeight: '900',
    lineHeight: 41,
  },
  subtitle: {
    fontFamily: font.family,
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 18,
    marginTop: 3,
  },
  settingsButton: {
    alignItems: 'center',
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  temperatureCard: {
    alignItems: 'center',
    borderRadius: 17,
    borderWidth: 1.3,
    elevation: 3,
    height: 338,
    justifyContent: 'center',
    marginBottom: 20,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    width: '100%',
  },
  temperatureIcon: {
    alignItems: 'center',
    borderRadius: 36,
    height: 72,
    justifyContent: 'center',
    marginBottom: 3,
    width: 72,
  },
  snowflake: {
    position: 'absolute',
    right: 3,
    top: 2,
  },
  temperature: {
    fontFamily: font.family,
    fontSize: 58,
    fontWeight: '900',
    lineHeight: 64,
  },
  room: {
    fontFamily: font.family,
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 25,
    marginTop: 14,
  },
  comfort: {
    fontFamily: font.family,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    marginTop: 3,
  },
  temperatureControls: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 18,
  },
  temperatureButton: {
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 62,
  },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewAllButton: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginTop: 9,
    minHeight: 43,
    paddingHorizontal: 8,
  },
  viewAllText: {
    fontFamily: font.family,
    fontSize: 22,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.55,
  },
});
