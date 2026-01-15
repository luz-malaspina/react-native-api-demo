import { StyleSheet, View, Text, Image } from 'react-native';

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

const styles = StyleSheet.create({
    image: {
      width: 100, 
      height: 100, 
      borderRadius: 10
    },
    card: {
      paddingTop: 20,
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