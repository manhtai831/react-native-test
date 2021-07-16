import React, {useState} from 'react';
import {Image, ImageBackground, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import css from './register.css';
import images from '../../../assets/images';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import ToastAndroid from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';


function RegisterScreen({navigation, router}) {
    const [isShow, setShow] = useState(false);
    const [errorUserName, setErrorUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onLongPressButton = () => {
        isShow ? setShow(false) : setShow(true);
    };
    const showToast = (text) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    };
    const validateAndFetch = () => {
        if (userName.length < 6) {
            setErrorUserName('Tên tài khoản phải dài hơn 6 ký tự');
            return;
        } else if (/\\w/.test(userName) === true) {
            setErrorUserName('Tên tài khoản không được chứa kí tự đặc biệt');
            return;
        } else {
            setErrorUserName('');
        }
        if (password.length < 6) {
            setErrorPassword('Mật khẩu quá ngắn');
            return;
        } else {
            setErrorPassword('');
        }
        if (password === confirmPassword) {
            setErrorConfirmPassword('');
            return;
        } else {
            setErrorConfirmPassword('Mật khẩu không khớp');
        }
        //fetch api

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
                        onChangeText={text => setUserName(text)}
                        placeholder="Nhập tài khoản"
                        style={css.input_style} on/>
                </View>
                <View>
                    <Text sty>{errorUserName}</Text>
                </View>
                <View style={css.text_input}>
                    <View style={{borderRightWidth: 2, borderRightColor: '#02e634', paddingHorizontal: 8}}>
                        <Image resizeMode="center" source={images.icon_mk}/>
                    </View>
                    <TextInput
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={!isShow}
                        placeholder="Nhập mật khẩu"
                        style={css.input_style}/>
                    <TouchableOpacity
                        onPress={onLongPressButton}>
                        <Image source={isShow ? images.visibility_off : images.visibility} width={20} height={20}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>{errorPassword}</Text>
                </View>
                <View style={css.text_input}>
                    <View style={{borderRightWidth: 2, borderRightColor: '#02e634', paddingHorizontal: 8}}>
                        <Image resizeMode="center" source={images.icon_mk}/>
                    </View>
                    <TextInput
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry={!isShow}
                        placeholder="Nhập lại mật khẩu"

                        style={css.input_style}/>
                    <TouchableOpacity
                        onPress={onLongPressButton}>
                        <Image source={isShow ? images.visibility_off : images.visibility} width={20} height={20}/>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text>{errorConfirmPassword}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 16}}>
                    <TouchableOpacity
                        onPress={() => validateAndFetch()}
                        style={css.btn_login} activeOpacity={0.8}>
                        <Text style={{color: Colors.white, fontWeight: 'bold'}}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={css.btn_back}
                        activeOpacity={0.8}>
                        <Text style={{color: Colors.white, fontWeight: 'bold'}}>QUAY LẠI</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: '#0066ff', marginVertical: 8}}>Hoặc đang nhập bằng</Text>
                <View style={{flexDirection: 'row', marginTop: 24}}>
                    <TouchableOpacity
                        onPress={() => loginWithGuest()}
                        style={css.c_btn_guest}
                        activeOpacity={0.8}>
                        <Image source={images.logo_enabled} resizeMode="contain" style={css.btn_guest}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => loginWithGuest()} style={css.c_btn_guest} activeOpacity={0.8}>
                        <Image source={images.ic_gg} resizeMode="contain" style={css.btn_guest}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => loginWithGuest()} style={css.c_btn_guest} activeOpacity={0.8}>
                        <Image source={images.ic_facebook} resizeMode="contain" style={css.btn_guest}/>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
}

export default RegisterScreen;
