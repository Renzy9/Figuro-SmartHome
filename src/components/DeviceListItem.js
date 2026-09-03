import { StyleSheet, Text, View } from 'react-native';

import { font, theme as defaultTheme } from '../theme';

export default function DeviceListItem({
  accent = defaultTheme.blue,
  colors = defaultTheme,
  icon,
  location,
  name,
  value,
}) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.line,
          shadowColor: accent,
        },
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: accent }]}>{icon}</View>
      <View style={styles.copy}>
        <Text style={[styles.name, { color: colors.ink }]}>{name}</Text>
        <Text style={[styles.location, { color: colors.muted }]}>{location}</Text>
      </View>
      <Text style={[styles.value, { color: accent }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 106,
    paddingHorizontal: 18,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    width: '100%',
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: 23,
    height: 46,
    justifyContent: 'center',
    marginRight: 14,
    width: 46,
  },
  copy: {
    flex: 1,
    paddingRight: 18,
  },
  name: {
    fontFamily: font.family,
    fontSize: 25,
    fontWeight: '900',
    lineHeight: 30,
  },
  location: {
    fontFamily: font.family,
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 22,
  },
  value: {
    fontFamily: font.family,
    fontSize: 16,
    fontWeight: '900',
  },
});
