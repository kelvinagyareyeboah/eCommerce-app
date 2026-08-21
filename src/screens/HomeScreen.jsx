import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandTitle}>ShopEase</Text>
        </View>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerSubtitle}>Special Offer</Text>
        <Text style={styles.bannerTitle}>Up to 50% Off</Text>
      </View>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 14,
    color: '#888888',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B4A',
  },
  banner: {
    margin: 16,
    padding: 18,
    backgroundColor: '#FF6B4A',
    borderRadius: 14,
  },
  bannerSubtitle: {
    color: '#FFE5DE',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
});
