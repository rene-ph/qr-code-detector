import React, {useState, useEffect, useMemo} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned');

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const askForCameraPermission = () => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status ==='granted');
        })();
    }

    const handlebarCodeScanned = ({type, data}) => {
        if (scanned) {
            setText(data);
            setScanned(false);
            console.log('Type: ' + type + '\nData ' + data);
        }
    }
    
    if (!hasPermission) {
        return (
          <View style={styles.container}>
            <Text style={{margin: 10}}>No access to camera</Text>
            <Button title={'Allow camera'} onPress={()=> askForCameraPermission()}></Button>
          </View>
        )
    }    

    if (hasPermission) {
        return ( 
                <>
                    <View style={styles.barcodebox}>
                        <BarCodeScanner 
                        onBarCodeScanned={scanned ? handlebarCodeScanned : undefined }
                        style={{ height: 400, width: 400}} />
                    </View>
                    <Text style={styles.mainText} selectable={true}>{text}</Text>
                    <Button title={'Scan'} onPress={() => { setScanned(true)}} color='darkred'/>
                </> 
        )
    }
    
}

const styles = StyleSheet.create({
    barcodebox: {
      alignItems : 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    },
    mainText:  {
      fontSize: 16,
      margin: 20,
    }
  });
export default Scanner;