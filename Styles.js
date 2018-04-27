/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
    Dimensions,
    StyleSheet,
    Platform
} from "react-native";

const window = Dimensions.get('window');
const heightItem = window.height / 12;

const flexRow = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15
};
const boxShadow = {
    shadowColor: '#9d9d9d',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    header: {
        backgroundColor: '#fafafa',
        paddingTop: Platform.OS === 'ios'? 20: 0,
        paddingBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -50 },
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 3,
        zIndex: 1,
        ...flexRow

    },
    centerItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },

    logo: {
        width: heightItem - 20,
        height: heightItem - 20
    },
    icons: {
        display: 'flex',
        flexDirection: "row"
    },

    itemContainer: {
        flex: 1,
        borderColor: "#000",
        backgroundColor: '#f1f7f5',
        borderBottomWidth: 1,
        ...boxShadow,
        elevation: 1,
    },
    itemContainerImage: {
        display: 'flex',
        width: window.width
    },
    itemContainerContent: {
        display: 'flex',
        padding: 15,

    },
    contentTitle: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    contentText: {
        fontSize: 8
    },
    contentNumber: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textColorRed: {
        color: "#dd2b2c"
    },
    textColorGray: {
        color: "#9d9d9d"
    },
    textColorWhite: {
        color: "#fff"
    },
    textBefore: {
        textDecorationLine: "line-through"
    },
    modalContainer:{
        flex:1,
        position:"absolute",
        marginTop: heightItem + 15,
        width:window.width,
        height:window.height,
        top:0,
        zIndex:1,
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    modal: {
        height: heightItem * 7,
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: 5,
        ...boxShadow
    },
    modalHeader: {
        height: heightItem,
        ...flexRow
    },
    listItems: {
        height: heightItem,
        ...flexRow,
        borderBottomWidth:1,
        borderColor:"#E4E4E4"
    },

    modalHorizontalDivider: {

        borderColor: "#E4E4E4",
        borderBottomWidth: 3,
    },

    button: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#9d9d9d'
    },
    buttonSelected: {
        backgroundColor: '#52a786',
    },

    emptyList :{
        height: heightItem * 5,
        width : window.width,
        alignItems:"center",
        justifyContent:"center"
    }

});

export default styles
