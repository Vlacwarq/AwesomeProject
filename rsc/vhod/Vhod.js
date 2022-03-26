import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function Vhod() {
  return (
    <View style={styles.container}>
      <Image style={styles.img}/>
      <Button  style={styles.button} title='войти'></Button>
      <Button style={styles.button}  title='регистрация'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
