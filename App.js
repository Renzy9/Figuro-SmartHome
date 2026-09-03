import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DashboardScreen from './src/screens/DashboardScreen';
import DevicesScreen from './src/screens/DevicesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { font, theme } from './src/theme';

const Stack = createNativeStackNavigator();

function AppHeader({ back, navigation, options }) {
  return (
    <SafeAreaView edges={['top']} style={styles.headerSafe}>
      <View style={styles.header}>
        {back ? (
          <Pressable
            accessibilityLabel="Go back"
            onPress={navigation.goBack}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="arrow-back" size={28} color={theme.ink} />
          </Pressable>
        ) : null}

        <Text style={[styles.headerTitle, !back && styles.homeHeaderTitle]}>
          {options.title}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={theme.header} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            contentStyle: styles.screenContent,
            header: (props) => <AppHeader {...props} />,
          }}
        >
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ title: 'Smart Home' }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Settings' }}
          />
          <Stack.Screen
            name="Devices"
            component={DevicesScreen}
            options={{ title: 'Settings' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: theme.header,
  },
  header: {
    height: 72,
    alignItems: 'center',
    backgroundColor: theme.header,
    borderBottomColor: theme.headerShadow,
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
    color: theme.ink,
    fontFamily: font.family,
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 18,
  },
  homeHeaderTitle: {
    marginLeft: 22,
  },
  screenContent: {
    backgroundColor: theme.background,
  },
});
