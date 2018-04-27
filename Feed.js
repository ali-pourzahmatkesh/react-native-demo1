/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {Image, Text, View} from "react-native";
import styles from "./Styles";

export default class Feed extends Component {

    render() {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemContainerImage} source={this.props.image}/>
                <View style={styles.itemContainerContent}>
                    <View>
                        <Text style={styles.contentTitle}>white orchid river cruise - bangkok dinner cruise on
                            the
                            chao phraya</Text>
                    </View>
                    <View>
                        <Text style={[ styles.contentText, styles.textColorRed ]}>Starting from</Text>
                        <Text style={[ styles.contentNumber, styles.textColorRed ]}>1000 <Text
                            style={[ styles.contentText, styles.textColorRed ]}>THB</Text></Text>
                        <Text style={[ styles.contentText, styles.textBefore ]}>Was 220</Text>
                    </View>
                </View>
            </View>
        );
    }
}

