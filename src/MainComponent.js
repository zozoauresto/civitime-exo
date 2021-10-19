import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { ReactComponent as Man } from "./assets/man.svg"
import { ReactComponent as Woman } from "./assets/woman.svg"
import { ReactComponent as Shirt } from "./assets/t-shirt.svg"
import { ReactComponent as Body } from "./assets/skin.svg"
import { ReactComponent as Color1 } from "./assets/color-88C10F.svg"
import { ReactComponent as Color2 } from "./assets/color-533724.svg"
import { ReactComponent as Color3 } from "./assets/color-B2C7C7.svg"
import { ReactComponent as Color4 } from "./assets/color-E0A39A.svg"
import { ReactComponent as Color5 } from "./assets/color-FCCC84.svg"
import { ReactComponent as Color6 } from "./assets/color-FCD7B8.svg"
import { ReactComponent as Color7 } from "./assets/color-FF1414.svg"
import { ReactComponent as Color8 } from "./assets/color-striped.svg"


class MainComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            shirtColor:0,
            bodyColor:0
        }
    }

    _changeColor() {
        switch (this.state.shirtColor) {
            case 0:
                return;
            case 1:
                return;
            case 2:
                return;
            case 3:
                return;
        }
        switch (this.state.bodyColor) {
            case 0:
                return;
            case 1:
                return;
            case 2:
                return;
            case 3:
                return;
        }
        //TODO il manque seulement la gestion du svg en fonction du use case, le squellette est là
    }

    render() {
        return (
            <View style={{flex:1,}}>
                <View style={styles.temp_style}>
                    <View style={styles.profilTxt}>
                        <View style={{marginTop:10,marginBottom:10}}>
                            PROFIL
                        </View>
                    </View>
                    <View style={styles.body_profil}>
                        <View style={{marginTop:20,marginBottom:20}}>
                            Lequel de ces deux avatars préférez-vous ?
                        </View>
                        <View style={styles.face_body}>
                            <Man style={{marginLeft:20,marginRight:20}}/>
                            <Woman style={{marginLeft:20,marginRight:20}}/>


                        </View>
                        <View style={styles.hr}/>
                        <View style={styles.face}>

                                <Body
                                    style={{marginTop: 5, marginRight:10}}
                                />

                            <TouchableOpacity onPress={() => this.setState({bodyColor:0})}>
                                <Color6/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({bodyColor:1})}>
                                <Color4/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({bodyColor:2})}>
                                <Color5/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({bodyColor:3})}>
                                <Color2/>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.shirt}>

                                <Shirt
                                    style={{marginTop: 5, marginRight:10}}
                                />

                            <TouchableOpacity onPress={() => this.setState({shirtColor:0})}>
                                <Color3
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({shirtColor:1})}>
                                <Color1
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({shirtColor:2})}>
                                <Color7
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({shirtColor:3})}>
                                <Color8
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.valid} onPress={this._changeColor()}>
                            VALIDER
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    temp_style:{
        margin: "10%",
    },
    profilTxt:{
        width:"100%",
        alignItems: 'center',
        backgroundColor: "purple",
        color:"white",
        fontWeight:"bold",
        flex:1
    },
    body_profil:{
        width:"100%",
        alignItems: 'center',
        flex:10,
        fontWeight:"lighter",
        borderColor:'purple',
        borderWidth:2,
    },
    face_body:{
        flexDirection: 'row'
    },
    hr:{
        alignItems: 'center',
        width:"25%",
        height:2,
        marginTop:40,
        marginBottom:20,
        backgroundColor: 'grey'
    },
    face:{
        flexDirection: 'row'
    },
    shirt:{
        flexDirection: 'row',
        marginTop: 30
    },
    valid:{
        marginTop:20,
        marginBottom: 20,
        backgroundColor:"blue",
        color:"white",
        fontWeight:"bold",
        width:150,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20
    }
})

export default MainComponent