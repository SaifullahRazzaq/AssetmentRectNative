import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import gStyle from '../styles';
import Header from '../../components/Header';
import Swiper from 'react-native-web-swiper';
import { Colors, Metrix } from '../../config';

export default function DetailScreen({ route }) {
    const item = route.params.item;
    // console.warn("item===>", item)
    const scrollRef = useRef(null);
    const swiperRef = useRef(null);
    const [screenLoading, setScreenLoading] = useState(true);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        swiperRef?.current?.goTo(activeImageIndex);
    }, [activeImageIndex]);

    const renderImages = ({ item, index }) => {
        // console.log("item images", item)
        return (
            <TouchableOpacity
                onPress={() => setActiveImageIndex(index)}
                style={{
                    marginLeft: index === 0 ? 0 : Metrix.HorizontalSize(12),
                    borderWidth: 3,
                    borderColor:
                        activeImageIndex === index ? Colors.primary : Colors.white,
                    borderRadius: 12,
                    overflow: 'hidden',
                }}>
                <Image
                    source={{ uri: item }}
                    style={styles.smallImage}
                />
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        setScreenLoading(false)
        // console.log('insu====>', insurance);
        if (!screenLoading) {
            scrollRef.current.scrollToIndex({
                animated: true,
                index: activeImageIndex,
                viewPosition: 0.85,
            });
        }
    }, [activeImageIndex]);




    return (
        <View style={gStyle.container}>
            <Header title="Post Details" show={false} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: Metrix.HorizontalSize(20) }}>
                <View style={styles.headerImageContainer}>
                    {/* {user && (
                        <TouchableOpacity
                            style={styles.searchIcon}
                            activeOpacity={0.6}
                            onPress={() => onSaveIconPress()}>
                            <Ionocons
                                name={fav ? 'bookmark' : 'bookmark-outline'}
                                size={Metrix.customFontSize(14)}
                                color={Colors.primary}
                            />
                        </TouchableOpacity>
                    )} */}
                    {!screenLoading ? (
                        <Swiper
                            controlsEnabled={false}
                            ref={swiperRef}
                            loadMinimal
                            loadMinimalSize={1}
                            horizontal
                            showsPagination={false}
                            onIndexChanged={index => {
                                scrollRef.current.scrollToIndex({
                                    animated: true,
                                    index: index,
                                    viewOffset: 60,
                                });
                                setActiveImageIndex(index);
                            }}>
                            {item?.images?.map((item, index) => {
                                console.warn("check here===>", item)
                                return (
                                    <Image
                                        source={{ uri: item }}
                                        style={{
                                            width: '100%',
                                            height: Metrix.VerticalSize(240),
                                        }}
                                    />
                                );
                            })}
                        </Swiper>
                    ) : null}
                </View>

                <FlatList
                    horizontal
                    data={item?.images ? item?.images : []}
                    ref={scrollRef}
                    initialScrollIndex={activeImageIndex}
                    renderItem={renderImages}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: Metrix.VerticalSize(26) }}
                />

                <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1 }}>
                            <Text
                                // numberOfLines={1}
                                style={{
                                    ...gStyle.title,
                                    marginVertical: Metrix.VerticalSize(5),
                                    fontSize: Metrix.customFontSize(16),
                                }}>
                                {item?.title}
                            </Text>

                            <Text
                                style={{
                                    ...gStyle.title,
                                    marginVertical: Metrix.VerticalSize(5),
                                    fontSize: Metrix.customFontSize(20),
                                }}>
                                {item?.description}
                            </Text>
                            <Text
                                // numberOfLines={1}
                                style={{
                                    ...gStyle.title,
                                    marginVertical: Metrix.VerticalSize(5),
                                    fontSize: Metrix.customFontSize(16),
                                }}>
                                Price:${item?.price}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerImageContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center',
        height: Metrix.VerticalSize(240),
        marginTop: Metrix.VerticalSize(26),
    },
    smallImage: {
        width: Metrix.HorizontalSize(90),
        height: Metrix.VerticalSize(75),
    },
    searchIcon: {
        position: 'absolute',
        zIndex: 100,
        top: Metrix.VerticalSize(12),
        right: Metrix.HorizontalSize(12),
        paddingHorizontal: Metrix.HorizontalSize(5),
        paddingVertical: Metrix.VerticalSize(5),
        borderRadius: 12,
        backgroundColor: Colors.white,
    },
    location: {
        fontSize: Metrix.customFontSize(10),
        color: Colors.secondary,
        // fontFamily: fonts.SemiBold,
    },
    rating: {
        fontSize: Metrix.customFontSize(8),
        color: Colors.secondary,
        // fontFamily: fonts.Bold,
        marginLeft: Metrix.HorizontalSize(5),
    },
    grayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Metrix.VerticalSize(12),
        borderRadius: 12,
        backgroundColor: Colors.gray,
        alignItems: 'center',
    },
    tableLeftContainer: {
        flex: 0.7,
        paddingVertical: Metrix.VerticalSize(10),
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: Colors.darkGray,
    },
    tableRightContainer: {
        flex: 0.3,
        paddingVertical: Metrix.VerticalSize(10),
        paddingHorizontal: 8,
    },
    tableItem: {
        fontSize: Metrix.customFontSize(11),
        // fontFamily: fonts.Regular,
        color: '#2F2F2F',
    },
    shadowContainer: {
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: Colors.white,
        marginVertical: Metrix.VerticalSize(5),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },

    imageContainer: {
        height: Metrix.VerticalSize(60),
        width: Metrix.VerticalSize(60),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    cardHeading: {
        fontSize: Metrix.customFontSize(11),
    },
    cardDetail: {
        fontSize: Metrix.customFontSize(10),
        color: Colors.primary,
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: Colors.gray,
    },
    modalStyle: {
        backgroundColor: Colors.white,
        paddingHorizontal: Metrix.VerticalSize(10),
        borderRadius: 12,
        // backgroundColor: 'yellow',
        maxHeight: Metrix.VerticalSize(700),
    },
    titleStyle: {
        marginTop: Metrix.VerticalSize(10),
        fontSize: Metrix.customFontSize(20),
        // fontFamily: fonts.PoppinsBold,
        color: Colors.textDarkColor,
    },
    modalTitleContainer: {
        marginVertical: Metrix.VerticalSize(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalBody: {
        // flex: 1,
        paddingHorizontal: Metrix.VerticalSize(5),
        // paddingBottom: Metrix.VerticalSize(100),
        // height: '90%'
    },
    pricesTabContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    priceTab: {
        // backgroundColor: Colors.primary,
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceTabText: {
        // fontFamily: fonts.Bold,
        color: Colors.white,
    },
    centerTabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: Metrix.HorizontalSize(4),
        paddingHorizontal: Metrix.HorizontalSize(6),
        paddingVertical: Metrix.VerticalSize(8),
        width: Metrix.HorizontalSize(100),
        flexDirection: 'row',
    },
    tabIcon: {
        height: 20,
        width: 20,
        marginRight: 5,
    },
    eyeIconStyle: {
        position: 'absolute',
        zIndex: 100,
        top: Metrix.VerticalSize(36),
        left: Metrix.HorizontalSize(15),
    },
    borderButton: {
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: Colors.primary,
        borderWidth: 1,
        marginBottom: 10,
    },
    screen: {
        // flex: 1,
        width: '100%',
        height: Metrix.VerticalSize(340),
    },
    map: {
        flex: 1,
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '40%',
    },
    marker: {
        height: 48,
        width: 48,
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '33%',
        marginRight: 20,
    },
    grayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Metrix.VerticalSize(12),
        borderRadius: 12,
        backgroundColor: Colors.gray,
        alignItems: 'center',
    },
    tableLeftContainer: {
        flex: 1,
        paddingVertical: Metrix.VerticalSize(10),
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderRightColor: Colors.darkGray,
    },
    tableRightContainer: {
        flex: 0.3,
        paddingVertical: Metrix.VerticalSize(10),
        paddingHorizontal: 8,
    },
    tableItem: {
        fontSize: Metrix.customFontSize(11),
        // fontFamily: fonts.Regular,
        color: '#2F2F2F',
    },
});
