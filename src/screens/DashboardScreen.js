import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import DeviceTile from '../components/DeviceTile';
import { font, theme } from '../theme';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.titleRow}>
        <Text style={styles.heading}>Smart Home</Text>
        <Pressable
          accessibilityLabel="Open settings"
          onPress={() => navigation.navigate('Settings')}
          style={({ pressed }) => [styles.settingsButton, pressed && styles.pressed]}
        >
          <Ionicons name="settings-sharp" size={45} color={theme.blue} />
        </Pressable>
      </View>

      <View style={styles.temperatureCard}>
        <View style={styles.temperatureIcon}>
          <FontAwesome5 name="thermometer-half" size={48} color="#29aaf0" />
          <MaterialCommunityIcons
            name="snowflake"
            size={28}
            color="#79c7ef"
            style={styles.snowflake}
          />
        </View>
        <Text style={styles.temperature}>26°C</Text>
        <Text style={styles.room}>Living Room</Text>
      </View>

      <View style={styles.deviceGrid}>
        <DeviceTile
          icon={
            <View style={styles.blueCircle}>
              <Ionicons name="bulb-outline" size={30} color="#ffffff" />
            </View>
          }
          name="Light"
          status="ON"
        />
        <DeviceTile
          icon={<MaterialCommunityIcons name="snowflake" size={47} color="#63add9" />}
          name="AC"
          status="24°C"
        />
        <DeviceTile
          icon={<FontAwesome5 name="lock" size={45} color="#1e94e8" />}
          name="Door"
          status="LOCKED"
        />
        <DeviceTile
          icon={<Ionicons name="camera" size={49} color="#55add8" />}
          name="Camera"
          status="ON"
        />
      </View>

      <Pressable
        accessibilityLabel="View all devices"
        onPress={() => navigation.navigate('Devices')}
        style={({ pressed }) => [styles.viewAllButton, pressed && styles.pressed]}
      >
        <Text style={styles.viewAllText}>View All Devices</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.ink} />
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
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 35,
    fontWeight: '900',
    lineHeight: 41,
  },
  settingsButton: {
    alignItems: 'center',
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  temperatureCard: {
    alignItems: 'center',
    borderColor: theme.ink,
    borderRadius: 17,
    borderWidth: 1.3,
    height: 362,
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  temperatureIcon: {
    alignItems: 'center',
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
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 58,
    fontWeight: '900',
    lineHeight: 64,
  },
  room: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 25,
    marginTop: 14,
  },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  blueCircle: {
    alignItems: 'center',
    backgroundColor: theme.blue,
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    width: 44,
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
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 22,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.55,
  },
});
