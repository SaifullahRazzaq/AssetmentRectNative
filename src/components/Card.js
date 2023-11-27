import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Metrix } from '../config';

const ShadowCard = ({ title, imageSource, description, price, onPressCard }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPressCard}>
            <Image source={imageSource} style={styles.image} resizeMode='contain' />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.description}>${price}</Text>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 4, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        margin: 10,
        padding: 15,
    },
    image: {
        width: '100%',
        height: Metrix.VerticalSize(250),
        borderRadius: 10,
        marginBottom: 10,
    },
    cardContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

export default ShadowCard;
