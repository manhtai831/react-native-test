import {StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageLogo: {
        width: '50%',
        height: '20%',
    }, text_input: {
        flexDirection: 'row',
        width: '80%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#02e634',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginTop: 16,
    }, input_style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    }, forget_pass: {
        textDecorationLine: 'underline',
        color: '#a1a1a1',
    }, c_forget_pass: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'flex-end',
        marginTop: 8
    }, btn_login: {
      backgroundColor:  '#0066ff',
        borderRadius: 100,
        paddingVertical: 16,
        width: '38%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16
    }, btn_register: {
        backgroundColor:  '#02e634',
        borderRadius: 100,
        paddingVertical: 16,
        width: '38%',
        justifyContent: 'center',
        alignItems: 'center',

    }, btn_guest: {
        width:64,
        height: 64,
    }, c_btn_guest: {
        width:64,
        height: 64,
        backgroundColor: Colors.white,
        borderRadius: 100,
        marginHorizontal: 16,
    },


});
