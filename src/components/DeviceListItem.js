import { StyleSheet, Text, View } from 'react-native';

import { font, theme } from '../theme';

export default function DeviceListItem({ location, name, value }) {
  return (
    <View style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderColor: theme.ink,
    borderRadius: 10,
    borderWidth: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 106,
    paddingHorizontal: 25,
    width: '100%',
  },
  copy: {
    flex: 1,
    paddingRight: 18,
  },
  name: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 25,
    fontWeight: '900',
    lineHeight: 30,
  },
  location: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 22,
  },
  value: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 16,
    fontWeight: '900',
  },
});
