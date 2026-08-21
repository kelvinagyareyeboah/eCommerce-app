import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetailsScreen({ route, navigation }) {
  const product = route?.params?.product;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.detailsBox}>
          <Text style={styles.name}>Product details unavailable</Text>
        </View>
      </SafeAreaView>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    Alert.alert('Success', `Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
        <View style={styles.detailsBox}>
          <View style={styles.headerRow}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>{product.rating}</Text>
            </View>
          </View>

          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <Text style={styles.sectionHeading}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.sectionHeading}>Quantity</Text>
          <View style={styles.quantityRow}>
            <TouchableOpacity style={styles.qtyButton} onPress={decreaseQuantity} activeOpacity={0.7}>
              <Text style={styles.qtyButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.qtyButton} onPress={increaseQuantity} activeOpacity={0.7}>
              <Text style={styles.qtyButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalPrice}>${(product.price * quantity).toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart} activeOpacity={0.85}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#F5F5F5',
  },
  detailsBox: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222222',
    flex: 1,
    marginRight: 10,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  star: {
    fontSize: 14,
    color: '#FFB800',
    marginRight: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#444444',
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FF6B4A',
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginTop: 12,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 22,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyButton: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  totalBox: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 12,
    color: '#888888',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#222222',
  },
  addToCartButton: {
    backgroundColor: '#FF6B4A',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
