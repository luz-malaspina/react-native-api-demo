import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameCard } from './GameCard';
import { Logo } from './Logo';

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
        <View style={{marginBottom: 20}}>
            <Logo width={180} height={40}/>
        </View>
        { games.length === 0 ? (
        <ActivityIndicator/> 
        ) : (
            <FlatList 
                data={games} 
                keyExtractor={(game)=> game.slug} 
                renderItem={({item})=> <GameCard game={item}/>}
            />
        )}
    </View>
  );
}

