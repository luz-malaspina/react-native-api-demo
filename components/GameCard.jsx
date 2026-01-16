import { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, Animated  } from 'react-native';

export function GameCard ({ game }) {
    return (
        <View style={styles.card}>
            {game?.image ? (
            <Image source={{ uri: game.image }} style={styles.image} />
            ) : null}
            <View style={styles.gameInfo}>
                <Text style={styles.title}>{game.title && game.title}</Text>
                <Text style={styles.genre}>{game.genre}</Text>
                <Text style={styles.description}>{game.description && game.description}</Text>
            </View>
        </View>
    )
}

export function AnimatedGameCard ({game, index})  {
    const opacity = useRef(new Animated.Value(0)).current;
    
    useEffect(()=> {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{opacity}}>
            <GameCard game={game} index={index}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    image: {
      width: 150, 
      height: 150, 
      borderRadius: 10
    },
    card: {
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    genre: {
        color: 'green'
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10
    },
    gameInfo: {
        padding: 10
    },
    description: {
       width: 280
    }
  });