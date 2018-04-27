/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./Styles";
import logo from "./assets/images/logo.png";
import ship from "./assets/images/ship.jpeg";
import ship2 from "./assets/images/ship2.jpeg";
import Feed from './Feed'

export default class App extends Component {
    state = {
        text: '',
        modalVisible: false,
        loading: false,
        list: []
    };

    search = ( text ) => {
        if( text ) {
            this.setState({ text, list: [], loading: true }, () => {
                let url = `https://recruitment.theasia.com/Activities/search_proto?input=${this.state.text}`;
                fetch(url, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json())
                  .catch(error => error)
                  .then(list => {
                      this.setState({ list, loading: false }, () => {
                          this.setModalVisible(true);
                      });
                  });
            });
        } else {
            this.setState({ text, list: [] });
        }
    };

    filter = () => {
    };

    setLocation = location => {
        console.log('location', location)
    };

    setModalVisible = visible => {

        this.setState({ modalVisible: visible }, () => {
            if( !visible ) {
                this.setState({ text: '', list: [] })
            }
        });
    };

    generateText = array => {
        return array.map(item => {
            if( item === '**Result**' ) {
                return (
                    <Text style={{ fontWeight: 'bold' }}> {this.state.text} </Text>)
            } else {
                return (
                    item
                )
            }
        })
    };

    itemLoader = item => {

        let normalText = item.text.split(',').join(' , ');
        let newText = normalText.split(' ');

        return (
            <TouchableOpacity style={styles.listItems} onPress={() => this.setLocation(item)}>
                <View style={{ flex: 1 }}>
                    <Icon name="location-on" size={25} color="#52a786"/>
                </View>
                <View style={{ flex: 8 }}>
                    <Text style={{ textAlign: 'left' }}>
                        {
                            this.generateText(newText)
                        }
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={[ styles.textColorGray, styles.contentText ]}>{item.count === 'null'? 0: item.count}</Text>
                </View>
            </TouchableOpacity>
        )
    };
    emptyList = () => {
        let { text, loading } = this.state;
        if( text && loading ) {
            return (
                <View style={styles.emptyList}>
                    <ActivityIndicator size="large" color="#52a786"/>
                </View>

            )
        }
        if( text && !loading ) {
            return (
                <View style={styles.emptyList}>
                    <Text style={styles.textColorGray}>Sorry, There is no result related to your criteria. Please change
                        it and retry.</Text>
                </View>

            )
        } else {
            return (
                <View style={styles.emptyList}>
                    <Text style={styles.textColorGray}>Please type something to view the result</Text>
                </View>

            )
        }

    };

    modalContent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.modalHeader} onPress={() => this.setModalVisible(false)}>
                        <Text style={styles.textColorGray}>Close Search</Text>
                        <Icon name="close" size={25} color="#000"/>
                    </TouchableOpacity>
                    <View style={styles.modalHorizontalDivider}/>
                    <View style={styles.modalHeader}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.container}>
                                <TouchableOpacity
                                    style={[ styles.button, styles.buttonSelected ]}
                                    onPress={() => this.filter()}
                                    underlayColor='#fff'>
                                    <Text style={styles.textColorWhite}>All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity
                                    style={[ styles.button ]}
                                    onPress={() => this.filter()}
                                    underlayColor='#fff'>
                                    <Text style={styles.textColorGray}>Destination</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container}>
                                <TouchableOpacity
                                    style={[ styles.button ]}
                                    onPress={() => this.filter()}
                                    underlayColor='#fff'>
                                    <Text style={styles.textColorGray}>Activity</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.modalHorizontalDivider}/>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.list}
                            keyExtractor={( item, index ) => index}
                            renderItem={( { item } ) => this.itemLoader(item)}
                            ListEmptyComponent={() => this.emptyList()}
                        />
                    </View>
                </View>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.modalVisible? this.modalContent(): null}
                <View style={styles.header}>
                    <View style={styles.centerItem}>
                        <Image style={styles.logo} source={logo}/>
                    </View>
                    <View style={styles.centerItem}>
                        <TextInput
                            onChangeText={( text ) => this.search(text) }
                            placeholder='Start Typing'
                            style={{ width: '100%' }}
                            onFocus={() => this.setModalVisible(true) }
                            value={this.state.text}
                        />
                    </View>
                    <View style={[ styles.centerItem, styles.icons ]}>
                        <TouchableHighlight>
                            <Icon name="search" size={30} color="#52a786"/>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Icon name="menu" size={30}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Feed image={ship}/>
                    <Feed image={ship2}/>
                    <Feed image={ship}/>
                    <Feed image={ship2}/>
                </ScrollView>
            </View>
        );
    }
}

