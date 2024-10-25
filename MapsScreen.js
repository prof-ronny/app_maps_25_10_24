import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const addresses = [
    { latitude: -23.63223192084747, longitude: -46.58185876762529, title: "Ponto A" },
    { latitude: -23.63571674541641, longitude: -46.5728146719286, title: "Ponto B" },
    // Adicione mais endereços conforme necessário
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.637451062335796,
          longitude: -46.578715218627764,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {addresses.map((place, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
