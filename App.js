import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getLatestGames } from './lib/metacritic';
import { Constants } from 'expo-constants';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getLatestGames();
        console.log("games length:", result?.length);
        console.log("first game:", result?.[0]);
        setGames(result);
      } catch (e) {
        console.log("getLatestGames error:", e?.message || e);
      }
    })();
  }, []);
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {games && games.map(game => 
        <View key={game.slug} style={styles.card}>
          <Image source={{uri: game.image}} style={styles.image}/>
          <Text>{game.description && game.description}</Text>
        </View>
      )}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 10
  },
  card: {
  }
});
