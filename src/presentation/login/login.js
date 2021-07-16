import React, {useState} from 'react';
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import css from './login_css';
import images from '../../../assets/images';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';


function LoginScreen({navigation}) {
    const [isShow, setShow] = useState(false);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onLongPressButton = () => {
        isShow ? setShow(false) : setShow(true);
    };

    const loginWithUserNameRegistered = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                gameId: '1',
                userName: userName,
                password: password,
                appKey: 'Ngẫu nhiên',
                deviceInfo: '{LẤY UUID của thiết bị}',
            }),
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({postId: data.id}));
    };

    const loginWithGuest = () => {

    };
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={images.background}
                             resizeMode="cover" style={css.container}>
                <Image resizeMode="contain" style={css.imageLogo} source={images.logo_enabled}/>
                <View style={css.text_input}>
                    <View style={{borderRightWidth: 2, borderRightColor: '#02e634', paddingHorizontal: 8}}>
                        <Image resizeMode="center" source={images.icon_user}/>
                    </View>
                    <TextInput
                        onChangeText={text => setUserName(text) }
                        placeholder="Nhập tài khoản"
                        style={css.input_style}/>
                </View>
                <View style={css.text_input}>
                    <View style={{borderRightWidth: 2, borderRightColor: '#02e634', paddingHorizontal: 8}}>
                        <Image resizeMode="center" source={images.icon_mk}/>
                    </View>
                    <TextInput
                        onChangeText={text => setPassword(text) }
                        secureTextEntry={!isShow}
                        placeholder="Nhập mật khẩu"
                        style={css.input_style}/>
                    <TouchableOpacity
                        onPress={onLongPressButton}>
                        <Image source={isShow ? images.visibility_off : images.visibility} width={20} height={20}/>
                    </TouchableOpacity>

                </View>
                <View style={css.c_forget_pass}>
                    <Text style={css.forget_pass}>Quên mật khẩu?</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 16}}>
                    <TouchableOpacity
                        style={css.btn_login} activeOpacity={0.8}
                        onPress={() => loginWithUserNameRegistered()}>
                        <Text style={{color: Colors.white, fontWeight: 'bold'}}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={css.btn_register} activeOpacity={0.8}
                        onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={{color: Colors.white, fontWeight: 'bold'}}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: '#0066ff', marginVertical: 8}}>Hoặc đang nhập bằng</Text>
                <View style={{flexDirection: 'row', marginTop: 24}}>
                    <TouchableOpacity
                        style={css.c_btn_guest}
                        activeOpacity={0.8}
                        onPress={() => loginWithGuest()}>
                        <Image source={images.logo_enabled} resizeMode="contain" style={css.btn_guest}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={css.c_btn_guest}
                        activeOpacity={0.8}
                        onPress={() => loginWithGuest()}>
                        <Image source={images.ic_gg} resizeMode="contain" style={css.btn_guest}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={css.c_btn_guest}
                        activeOpacity={0.8}
                        onPress={() => loginWithGuest()}>
                        <Image source={images.ic_facebook} resizeMode="contain" style={css.btn_guest}/>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
}

export default LoginScreen;
