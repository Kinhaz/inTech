import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Header: Logo e Avatar */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://i.snipboard.io/rVenpW.jpg' }} 
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>L</Text>
            <View style={styles.avatarBadge} />
          </View>
        </View>

        {/* Saudação */}
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Olá, Lucas 👋</Text>
          <Text style={styles.subtitle}>A tecnologia adaptada para você</Text>
        </View>

        {/* Card Principal de Otimização (Azul Escuro) */}
        <View style={styles.mainCard}>
          <View style={styles.mainCardContent}>
            <View style={styles.cardHeader}>
              <View style={styles.assistantBadge}>
                <Text style={styles.assistantEmoji}>✨</Text>
                <Text style={styles.assistantText}> ASSISTENTE INTECH</Text>
              </View>
              <View style={styles.activeBadge}>
                <Text style={styles.activeText}>• ATIVO</Text>
              </View>
            </View>

            <Text style={styles.cardTitle}>
              Seu ambiente digital está <Text style={styles.highlightText}>otimizado.</Text>
            </Text>
            
            <Text style={styles.cardDescription}>
              A IA da inTech ajustou sua experiência para melhorar foco, conforto visual e acessibilidade.
            </Text>

            <TouchableOpacity style={styles.verAdaptacoesBtn} activeOpacity={0.9}>
              <Text style={styles.verAdaptacoesText}>Ver adaptações  ⟩</Text>
            </TouchableOpacity>
          </View>

          {/* Ilustração Representativa do Cérebro (Usando Emoji) */}
          <View style={styles.brainContainer}>
            <Text style={styles.brainEmoji}>🧠</Text>
          </View>
        </View>

        {/* Grid de Recursos (2 colunas) */}
        <View style={styles.gridContainer}>
          
          {/* Card 1: Modo Foco */}
          <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
            <View style={styles.iconWrapper}>
              <Text style={styles.gridEmoji}>🎯</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.gridCardTitle}>Modo Foco</Text>
              <Text style={styles.gridCardSub}>Redução de distrações</Text>
            </View>
            <Text style={styles.cardChevron}>⟩</Text>
          </TouchableOpacity>

          {/* Card 2: Conforto Visual */}
          <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
            <View style={styles.iconWrapper}>
              <Text style={styles.gridEmoji}>👁️</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.gridCardTitle}>Conforto Visual</Text>
              <Text style={styles.gridCardSub}>Menos fadiga ocular</Text>
            </View>
            <Text style={styles.cardChevron}>⟩</Text>
          </TouchableOpacity>

          {/* Card 3: Perfil Cognitivo */}
          <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
            <View style={styles.iconWrapper}>
              <Text style={styles.gridEmoji}>🧬</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.gridCardTitle}>Perfil Cognitivo</Text>
              <Text style={styles.gridCardSub}>Adaptação inteligente</Text>
            </View>
            <Text style={styles.cardChevron}>⟩</Text>
          </TouchableOpacity>

          {/* Card 4: Personalização */}
          <TouchableOpacity style={styles.gridCard} activeOpacity={0.8}>
            <View style={styles.iconWrapper}>
              <Text style={styles.gridEmoji}>🎛️</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.gridCardTitle}>Personalização</Text>
              <Text style={styles.gridCardSub}>Ajustes em tempo real</Text>
            </View>
            <Text style={styles.cardChevron}>⟩</Text>
          </TouchableOpacity>

        </View>

        {/* Botão de Navegação Inferior */}
        <View style={styles.bottomNavContainer}>
          <View style={styles.bottomNavCircle} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f4f0',
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0d1e3d',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  avatarBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ffdf80',
    borderWidth: 2,
    borderColor: '#f5f4f0',
  },
  welcomeSection: {
    marginVertical: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0d1e3d',
  },
  subtitle: {
    fontSize: 15,
    color: '#7e8a9b',
    marginTop: 4,
  },
  mainCard: {
    backgroundColor: '#041633',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  mainCardContent: {
    flex: 1.3,
    zIndex: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  assistantBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assistantEmoji: {
    fontSize: 12,
  },
  assistantText: {
    color: '#a3b8cc',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  activeBadge: {
    backgroundColor: '#ffdf80',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  activeText: {
    color: '#0d1e3d',
    fontSize: 9,
    fontWeight: 'bold',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  highlightText: {
    color: '#ffdf80',
  },
  cardDescription: {
    color: '#cbd5e1',
    fontSize: 12,
    lineHeight: 16,
    marginVertical: 12,
  },
  verAdaptacoesBtn: {
    backgroundColor: '#ffdf80',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  verAdaptacoesText: {
    color: '#0d1e3d',
    fontSize: 13,
    fontWeight: 'bold',
  },
  brainContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brainEmoji: {
    fontSize: 65,
    opacity: 0.8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 14,
  },
  gridCard: {
    backgroundColor: '#e9e8e4',
    width: '48%',
    borderRadius: 16,
    padding: 14,
    position: 'relative',
  },
  iconWrapper: {
    marginBottom: 12,
  },
  gridEmoji: {
    fontSize: 24,
  },
  cardTextContainer: {
    gap: 2,
  },
  gridCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0d1e3d',
  },
  gridCardSub: {
    fontSize: 11,
    color: '#7e8a9b',
  },
  cardChevron: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    fontSize: 16,
    color: '#ffdf80',
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  bottomNavCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#0d1e3d',
  },
});