import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Modal, SafeAreaView, TouchableOpacity } from "react-native";

import Logo from "../assets/images/logo.png";

const PlantScreen = () => {
    const tomato = require('../assets/images/Tomato.png');
    const bellpepper = require('../assets/images/bellpepper.png');
    const lettuce = require('../assets/images/lettuce.png');
    const sili = require('../assets/images/sili.png');
    const okra = require('../assets/images/okra.png');
    const ginger = require('../assets/images/ginger.png');
    const pechay = require('../assets/images/pechay.png');
    const garlic = require('../assets/images/garlic.png');
    const kale = require('../assets/images/kale.png');
    const cauli = require('../assets/images/cauli.png');

    const plantData = [
        {
            id: 1,
            title: 'Tomato',
            image: tomato,
            content: 'The tomato is a widely cultivated and popular vegetable in various parts of the world. Its scientific name is Lycopersicum esculentum Miller. It is commonly used in many food recipes and is considered a highly profitable crop for off-season production, typically between the months of May and September.',
            siteSelection: 'Choose an elevated part of the farm with good drainage to avoid water logging during wet season floods. For dry season planting, create a catchment with a canal to drain excess water after each irrigation. Use sandy loam or clay loam soil with a pH of 5.5-8.0.',
            waterManagement: 'Depending on the weather and soil, water the plants once a week until the early fruiting stage.'
        },
        {
            id: 2,
            title: 'Bellpepper',
            image: bellpepper,
            content: 'Bell peppers, also known as sweet peppers (Capsicum annuum L.), belong to the solanaceous family and can be grown year-round.',
            siteSelection: 'Prepare the area well by plowing and harrowing the field multiple times for well-pulverized soil. For small areas, plant in plots of 0.75-1m width, and for larger areas, plant in furrows set 0.6-0.75m apart. Use raised beds (20-30cm high, 1m wide) for planting during the wet season. Sweet pepper thrives in soil with a pH of 5.5 to 6.5 and prefers sandy loam soil. It needs a temperature between 25 to 32 degrees Celsius for optimal growth.',
            waterManagement: 'Water the field once every 7-10 days, ensuring that there is enough water during the initial growth period and when the plant is flowering until the peak of fruit development.'
        },
        {
            id: 3,
            title: 'Lettuce',
            image: lettuce,
            content: 'Lettuce, scientifically known as Lactuca sativa L., is the most popular salad vegetable. Its high fiber content but low nutrient value make it an ideal vegetable for individuals who are mindful of their diet.',
            siteSelection: 'Lettuce typically thrives in cooler temperatures of 15-20°C, and iceberg varieties may not form heads in hotter areas. It grows best at high elevations of around 1000m asl, but it can also be planted in low elevations from November to December. Depending on the type of lettuce, it can withstand temperatures between 45 to 64°F (7-18°C) and can still grow even in temperatures up to 84°F (29°C) with proper care. For best results when planting in spring or fall, it is recommended to choose a sunny location. Lettuce typically grows best in soil that is fertile and has a pH range of 6 to 6.8.',
            waterManagement: 'Lettuce plants have shallow roots and usually require frequent but smaller irrigation. In the summer, daily watering and shading may be necessary. Using furrow irrigation, if possible, is advised, and applying mulch can help retain soil moisture.'
        },
        {
            id: 4,
            title: 'Sili',
            image: sili,
            content: 'Pepper is a common vegetable that belongs to the Nightshade or Solanaceae family. It is a popular ingredient in Filipino dishes.',
            siteSelection: 'Pepper is a crop that thrives in sunny conditions. It is typically planted during the wet season, from May to September, and during the dry season, from October to February.',
            waterManagement: 'Proper watering is a crucial factor in cultivating chili pepper plants as they have a high demand for water. In hot periods, particularly when grown in a greenhouse, it is essential to water them frequently, ideally twice a day, to prevent stunted growth caused by dry soil.'
        },
        {
            id: 5,
            title: 'Okra',
            image: okra,
            content: 'Okra (Hibiscus esculentus L.) is an annual vegetable crop that grows tall and thrives in warm weather. It is a popular and profitable crop in the country. Okra grows best in a long, warm growing season, with a monthly average temperature of 20-30°C promoting optimal growth, flowering, and fruit development',
            siteSelection: 'To achieve a better yield, it is recommended to grow okra in well-drained silty to sandy loam soils with adequate organic matter. Although okra can tolerate various soil types, this type of soil is ideal. The seeds of okra require relatively warm soil to germinate, and they will not germinate in soil temperatures below 16°C.',
            waterManagement: 'Crop production is often constrained by the availability of water. It is important to irrigate or water the plants regularly to ensure their growth and development. Water the plants every 7 to 14 days, depending on the season and soil type.'
        },
        {
            id: 6,
            title: 'Ginger',
            image: ginger,
            content: ' Ginger, scientifically named Zingiber officinale Roscoe, is well-known for its unique pungent and spicy taste, which is attributed to the presence of an oily compound called gingerol. In Tagalog, it is called Luya. The plant has a height of approximately 0.8 meters, but in some regions like Costa Rica, Hawaii, and Honduras, it can grow up to 1.5 meters. It also has perennial underground rhizomes called hands that resemble fingers.',
            siteSelection: 'Ginger flourishes in areas with level ground or gentle slopes, where the soil is well-draining, has high organic content, and has a pH ranging from 6.8-7.0. Additionally, ginger can grow well in areas that are partially shaded, with a shade of 25-40%.',
            waterManagement: 'During the vegetative phase, ginger needs regular watering, but in smaller quantities, if there is an uneven distribution of rainfall. The frequency of irrigation, which typically ranges from 4 to 7 days, depends on the soil type and the amount of rainfall during the season.'
        },
        {
            id: 7,
            title: 'Pechay',
            image: pechay, content: 'Pechay, scientifically known as Brassica rapa L. cv group PakChoi, is a biennial herb that is cultivated as an annual plant during its vegetative stage. It typically grows to a height of 15-30 cm. This plant is highly popular in Asian countries, particularly in the Philippines, and is widely cultivated due to its ease of growth.',
            siteSelection: 'Pechay can be cultivated all year round at mid to low elevations, but it thrives best in cooler conditions that result in good growth and quality produce. In areas where dry seasons prevail, it can still be grown successfully by providing adequate irrigation. Pechay grows best in sandy to clay loam soil that has a pH ranging from 5.5 to 6.5.',
            waterManagement: 'During the dry season, it is recommended to water the plants every other day or as needed. It may also be necessary to hoe the weeds during their early stages of growth before the plants grow and shade the spaces in between them. Since these crops grow quickly and are spaced closer together, weeds are typically not a significant issue.'
        },
        {
            id: 8,
            title: 'Garlic',
            image: garlic,
            content: 'Garlic, scientifically known as Allium stivum L., or locally called bawang, is a perennial herb belonging to the Amaryllidaceae family. The plant produces a bulb that is enclosed by sheaths and consists of thin-shelled bulblets, cloves, or sets that can all develop into a new plant.',
            siteSelection: 'Garlic is a dry season crop that is typically harvested during hot summer months, but it is more productive during cool periods with shorter days as this is when bulb formation occurs. The crop grows best in clay alluvial and sandy loam soil and requires cool weather during its early growth stages. During the ripening stage, a dry soil, dry atmosphere, and moderately high temperature are crucial.',
            waterManagement: 'To ensure proper bulb formation, it is important to maintain normal soil moisture levels and avoid excessive watering. Irrigation should only be done when the soil is noticeably dry, as over-watering can be detrimental to the crop.'
        },
        {
            id: 9,
            title: 'Kale',
            image: kale,
            content: 'Kale, scientifically known as Brassica oleracea, is a type of cabbage that differs from most cabbages in that it does not form a tightly packed head. Instead, it is categorized as a cooking green along with collards, mustard, and Swiss chard. Kale plants can have attractive appearances with their textured and curly leaves that can come in various colors including green, purple, and others.',
            siteSelection: 'Kale is a versatile plant that can be grown in different types of containers, such as pots or raised beds, as well as in garden soil. If growing kale indoors, it needs adequate lighting. The best soil for growing kale is one that has rich organic matter and good drainage. Kale should be planted in an area that gets enough sunlight, and its important to avoid planting it too close to taller plants that can block the sun. In hot climates, east-facing windows can be a good location for growing kale to avoid sun scorching.',
            waterManagement: 'Kale requires a consistent and adequate amount of water to emain healthy. It thrives when given approximately 1 to 1 1/2 inches of water per week, with the soil remaining evenly moist but not waterlogged. Regular watering is necessary to maintain the proper moisture level in the soil.'
        },
        {
            id: 10,
            title: 'Cauliflower',
            image: cauli,
            content: 'Cauliflower (Brassica oleracea L. var botrytis) is another popular crucifer grown mainly in cooler areas. These crops can be planted in most soils but clay loam to sandy loam is best.',
            siteSelection: 'In April, plant spring cauliflower that has a short growth cycle and can tolerate heat. Ensure the plant receives a minimum of 6 hours of full sun daily and plant it in rich, well-drained soil with a pH between 6.5-6.8. In summer, use a lightweight cover to prevent overheating.',
            waterManagement: 'Before transplanting during the dry season, it is recommended to irrigate. Afterward, irrigation should be repeated every 7-10 days using furrow irrigation or 2-3 times per week using sprinkler irrigation. The use of mulching can help reduce the frequency of irrigation needed.'
        },
    ];

    const [activeModalIndex, setActiveModalIndex] = useState(null);

    const openModal = (index) => {
        setActiveModalIndex(index);
    };

    const closeModal = () => {
        setActiveModalIndex(null);
    };


    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.headerBar}>
                <Image style={styles.headerBarLogo} source={Logo} resizeMode="contain" />
                <Text style={styles.headerBarText}>Plant</Text>
                <View style={styles.headerBarLogo} />
            </View>
            <ScrollView style={styles.body}>

                <View>
                    {plantData.map((plantData, index) => (
                        <TouchableOpacity style={styles.buttonModalContainer} key={plantData.id} onPress={() => openModal(index)}>
                            <Image style={styles.buttonModalImage} source={plantData.image} resizeMode="contain" />
                            <Text style={styles.buttonModalText}>{plantData.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.whiteSpace} />


                {plantData.map((plantData, index) => (
                    <Modal key={plantData.id} transparent={true} visible={activeModalIndex === index} animationType="slide" >
                        <View style={styles.modalRoot}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.headerText}>{plantData.title}</Text>
                                <Text style={styles.subText}>{plantData.content}</Text>
                                <Text style={styles.headerText}>Site Selection</Text>
                                <Text style={styles.subText}>{plantData.siteSelection}</Text>
                                <Text style={styles.headerText}>Water Management</Text>
                                <Text style={styles.subText}>{plantData.waterManagement}</Text>
                                <TouchableOpacity style={styles.buttonContainer} onPress={closeModal}>
                                    <Text style={styles.headerText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
};

export default PlantScreen;

const styles = StyleSheet.create({

    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        backgroundColor: 'white'
    },
    headerBarLogo: {
        width: 55,
        height: 55,
    },
    headerBarText: {
        fontSize: 26,
        fontWeight: '500',
        color: '#415D43'
    },
    body: {
        width: '100%',
        flex: 10,
        padding: '4%',
    },

    whiteSpace: {
        marginBottom: 150,
    },

    buttonModalContainer: {
        borderWidth: 5,
        borderColor: '#445D46',
        borderRadius: 15,
        backgroundColor: '#8FAB56',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: '10%',
        paddingVertical: '3%'
    },
    buttonModalImage: {
        height: 80,
        width: 80,
    },
    buttonModalText: {
        fontSize: 30,
        fontWeight: 'bold',
        width: '60%'
    },
    modalRoot: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '2%'
    },
    modalContainer: {
        padding: '5%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        gap: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        textAlign: 'justify',
    },
    buttonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        backgroundColor: '#425E47',
        borderRadius: 10,
    }
});
