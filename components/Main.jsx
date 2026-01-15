import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { ScrollView,ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameCard } from './GameCard';

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      try {
        const result = await getLatestGames();
       
        setGames(result);
      } catch (e) {
        console.log("getLatestGames error:", e?.message || e);
      }
    })();
  }, []);
  
  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1}}>
        { games.length === 0 ? (
        <ActivityIndicator/> 
        ) : (
            <ScrollView>
                {games && games.map(game => 
                    <GameCard game={game} key={game.slug}/>
                )}
            </ScrollView>
        )}
     
    </View>
  );
}

