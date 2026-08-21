import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ product, onPress }) {
  const [fav, setFav] = useState(false);
  const { image, name, price, bgColor = '#E8E5FF' } = product;

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: bgColor }]} onPress={onPress} activeOpacity={0.8}>
      <TouchableOpacity style={styles.fav} onPress={() => setFav(!fav)}>
        <Ionicons name={fav ? 'heart' : 'heart-outline'} size={18} color={fav ? '#E63946' : '#222'} />
      </TouchableOpacity>

      <Image source={{ uri: image }} style={styles.img} resizeMode="cover" />

      <Text style={styles.name} numberOfLines={2}>{name}</Text>

      <View style={styles.row}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Ionicons name="cart" size={14} color="#FFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 16,
    padding: 12,
    marginVertical: 6,
    justifyContent: 'space-between',
  },
  fav: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  img: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    marginTop: 18,
    marginBottom: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
    minHeight: 34,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
  },
  btn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
