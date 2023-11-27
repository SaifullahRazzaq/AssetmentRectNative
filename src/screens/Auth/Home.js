import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import ShadowCard from '../../components/Card';
import { useDispatch } from 'react-redux';
import { AuthMiddleware } from '../../redux/Middlewares';
import Header from '../../components/Header';
import { NavigationService } from '../../config';
const Home = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AuthMiddleware.GetPost({
            callback: (res) => {
                setData(res?.products)
            }
        }))
    }, []);
    const renderCard = ({ item }) => (
        <ShadowCard
            title={item.title}
            imageSource={{ uri: item?.images[0] }}
            description={item.description}
            price={item?.price}
            onPressCard={() => NavigationService.navigate('Detail', { item: item })}
        />
    );
    return (
        <View style={styles.container}>
            <Header title="Example Fetch Post" show={true} />
            <FlatList
                data={data}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default Home;