import { StyleSheet, Text, View } from 'react-native';

import { font, theme } from '../theme';

export default function DeviceTile({ icon, name, status }) {
  return (
    <View style={styles.tile}>
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    borderColor: theme.ink,
    borderRadius: 15,
    borderWidth: 1.3,
    height: 118,
    justifyContent: 'center',
    marginBottom: 14,
    width: '48%',
  },
  iconWrap: {
    alignItems: 'center',
    height: 43,
    justifyContent: 'center',
    marginBottom: 4,
  },
  name: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 22,
    fontWeight: '900',
    lineHeight: 28,
    textAlign: 'center',
  },
  status: {
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 22,
    marginTop: 3,
    textAlign: 'center',
  },
});
