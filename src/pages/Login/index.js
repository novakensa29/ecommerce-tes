import { SafeAreaView, TextInput, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ms from '../../utils/ms'
import { colors } from '../../utils'
import { IconTextDicuci, IconTextMitra } from "../../assets/icon";
import { LoginEmail, LoginPhone } from "../../components";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';
import { showMessage } from "react-native-flash-message";
import { FingerPrint } from '../../assets/icon';

const Login = () => {
const dispatch =  useDispatch();
const navigation =  useNavigation()
const [isSecureEntry, setIsSecureEntry] = useState(true)
const [icon, setIcon] = useState("eye-off");

const [inputs, setInputs] = useState({
    email: '',
    password: '',
});

return (
    <SafeAreaView style={[ms.containerPage, ms.pdH(39)]}>
        <View style={[ms.aiJc(), ms.pdT(120)]}>
            <Text style={[ms.fzBC(40, '700', '#800000')]}>HATOCA</Text>
        </View>

        <View style={[ms.row, ms.pdT(15), ms.ai()]}>
        <View>
            <View  style={[ms.pdT(32)]}>
                <View style={[ms.pdB(16)]}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#B3B3B3', paddingBottom: 2, marginBottom:2, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput 
                        value={inputs?.email}
                        onChangeText={(value) => {
                            setInputs({
                                ...inputs,
                                email: value,
                            })
                        }} 
                        placeholder="Email"/>
                    </View>
                </View>
                <View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#B3B3B3', paddingBottom: 2, marginBottom:25, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[ms.width('92%')]}>
                            <TextInput 
                            value={inputs?.password}
                            onChangeText={(value) => {
                                setInputs({
                                    ...inputs,
                                    password: value,
                                })
                            }} 
                            placeholder="Password" 
                            secureTextEntry={isSecureEntry}/>
                        </View>
                        <View style={[ms.width('8%')]}>
                            <TouchableOpacity onPress={() => setIsSecureEntry((prev) => !prev)}>
                                <Icon name={isSecureEntry ? "eye-off" : "eye"} style={[ms.txC('#9DA8B1'), ms.fz(18)]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                    <Text style={{fontSize: 12, fontWeight:'400', color:'#800000', textDecorationLine: 'underline'}}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', paddingBottom: 200, paddingTop: 20}}>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("MainApp")
                    }}
                >
                    <View style={[ms.wh(300, 48), ms.bc('#800000'), ms.br(10), ms.aiJc(), ms.bdC(colors.primary), ms.mgR(5)]}>
                        <Text style={[ms.fzBC(14, '700', colors.white)]}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("MainApp")
                    }}
                >
                    <View style={[ms.wh(50, 48), ms.bc('#800000'), ms.br(10), ms.aiJc(), ms.bdC(colors.primary)]}>
                        <Image source={FingerPrint}></Image>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[ms.aiJc(), ms.row]}>
                <View>
                    <Text style={[ms.fzBC(14, '400', '#6C6C6C')]}>Don't have an account ? </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{fontSize: 14, fontWeight:'400', color:'#800000', textDecorationLine: 'underline'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  buttonOff:{
      
  },
  buttonOn:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      borderRadius: 6,
      borderColor: colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 4,
  },
  textOff: {
      fontSize:12,
      color: '#B1B1B1',
      fontWeight: '700',
      lineHeight: 14
  },
  textOn:{
      fontSize:12,
      color: colors.white,
  },
})