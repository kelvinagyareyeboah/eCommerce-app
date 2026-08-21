import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomeScreen({ navigation }) {
  const renderCard = (p) => (
    <ProductCard
      key={p.id}
      product={p}
      onPress={() => navigation.navigate('ProductDetails', { product: p })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={26} color="#1A1A1A" />
          </TouchableOpacity>
          <View style={styles.logo}>
            <Ionicons name="bag-handle" size={24} color="#FF6B4A" />
            <Text style={styles.logoText}>ShopEase</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.subTitle}>New Release</Text>
            <Text style={styles.title}>OLEVS 5 V13</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' }}
            style={styles.heroImg}
          />
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.pill}>
            <Text style={styles.pillText}>Sort By </Text>
            <Ionicons name="chevron-down" size={14} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pill}>
            <Text style={styles.pillText}>Filter </Text>
            <Ionicons name="options-outline" size={14} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.orangeBtn}>
            <Ionicons name="cart-outline" size={16} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search-outline" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {products.slice(0, 4).map(renderCard)}
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>Free delivery for First Item</Text>
            <TouchableOpacity style={styles.acceptBtn}>
              <Text style={styles.btnText}>Accept Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80' }}
            style={styles.bannerImg}
          />
        </View>

        <View style={styles.grid}>
          {products.slice(4).map(renderCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { paddingHorizontal: 16, paddingBottom: 24 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  logo: { alignItems: 'center' },
  logoText: { fontSize: 10, fontWeight: '800', color: '#1A1A1A', marginTop: -2 },
  hero: { height: 150, borderRadius: 16, backgroundColor: '#0D0D0D', marginTop: 8, overflow: 'hidden', justifyContent: 'center' },
  heroImg: { position: 'absolute', right: 0, width: '65%', height: '100%', opacity: 0.9 },
  heroText: { position: 'absolute', left: 16, zIndex: 2 },
  subTitle: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  title: { color: '#FFF', fontSize: 20, fontWeight: '900', marginTop: 4 },
  actionRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 14 },
  pill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', paddingVertical: 7, paddingHorizontal: 12, borderRadius: 8, marginRight: 8 },
  pillText: { color: '#FFF', fontSize: 12, fontWeight: '700' },
  orangeBtn: { backgroundColor: '#FF6B4A', width: 32, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  searchBtn: { backgroundColor: '#111', width: 32, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  banner: { height: 120, backgroundColor: '#FF8A50', borderRadius: 16, marginVertical: 14, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, overflow: 'hidden' },
  bannerText: { flex: 1 },
  bannerTitle: { color: '#FFF', fontSize: 18, fontWeight: '800', marginBottom: 10 },
  acceptBtn: { backgroundColor: '#0B132B', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, alignSelf: 'flex-start' },
  btnText: { color: '#FFF', fontSize: 12, fontWeight: '700' },
  bannerImg: { width: 100, height: 100, borderRadius: 12 },
});
