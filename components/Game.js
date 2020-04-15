import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('white')

    const plus = () => {
        setCounter(counter + 1);
    }
    const minus = () => {
        setCounter(counter - 1);
    }
    const red = () => {
        setColor('red')
    }
    const gold = () => {
        setColor('gold')
    }
    const maroon = () => {
        setColor('maroon')
    }
    const pink = () => {
        setColor('pink')
    }
    const white = () => {
        setColor('white')
    }

    return (
        <View style={{ textAlign: 'center', backgroundColor: color, height: 1000 }} >
            <Text style={style.text}>Your count is:{counter}</Text>
            <View style={style.buttonPlus}>
                <Button color="white" title="Plus 1" onPress={plus} />
            </View>
            <View style={style.buttonMinus}>
                <Button color="white" title="Minus 1" onPress={minus} />
            </View>
            <Text style={style.text}>Color of the background:</Text>
            <View style={style.buttonColor}>
                <Button color="white" title="Red" onPress={red} />
            </View>
            <View style={style.buttonColor}>
                <Button color="white" title="Gold" onPress={gold} />
            </View>
            <View style={style.buttonColor}>
                <Button color="white" title="Maroon" onPress={maroon} />
            </View>
            <View style={style.buttonColor}>
                <Button color="white" title="Pink" onPress={pink} />
            </View>
            <View style={style.buttonColor}>
                <Button color="white" title="White" onPress={white} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 50
    },
    buttonPlus: {
        backgroundColor: 'black',
        width: 100,
        borderRadius: 10,
        marginLeft: 160,
        margin: 15


    },
    buttonMinus: {
        backgroundColor: 'black',
        width: 100,
        borderRadius: 10,
        margin: 15,
        marginLeft: 160

    },
    buttonColor: {
        backgroundColor: 'black',
        width: 100,
        borderRadius: 10,
        marginLeft: 160,
        margin: 15,
    }

});
