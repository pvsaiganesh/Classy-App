import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    { title: 'Eligibility', content: 'With every product you buy, you don’t just shop you enter an exciting campaign! With every product you buy, you don’t just shop you enter an exciting campaign! With every product you buy, you don’t just shop you enter an exciting campaign! ' },
    { title: 'Winner Selection', content: 'Winners are selected randomly based on criteria.' },
    { title: 'Eligibility', content: 'Another explanation of eligibility.' },
    { title: 'Eligibility', content: 'Details on eligibility repeated.' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Rules and Guidelines</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {data.map((item, index) => (
          <View key={index} style={styles.section}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection(index)}
            >
              <Text
                style={[
                  styles.sectionTitle,
                  activeIndex === index && styles.activeSectionTitle,
                ]}
              >
                {item.title}
              </Text>
              <Ionicons
                name={activeIndex === index ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
            {activeIndex === index && (
              <Text style={styles.sectionContent}>{item.content}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    padding: 15,
    marginTop:40,
  },
  section: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  activeSectionTitle: {
    color: '#ff6f00',
  },
  sectionContent: {
    padding: 15,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default App;
