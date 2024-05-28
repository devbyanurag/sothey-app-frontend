import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../utils/types";

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, "AuthScreen">;

const AuthScreen = (props: AuthScreenProps) => {
    const cardImages = {
        appleImg: require('../../../assets/images/apple.png'),
        logoImg: require('../../../assets/images/logo.png')

    };

    return (
        <View style={styles.container}>
            <View style={styles.logoImgContainer}>
                <Image source={cardImages.logoImg} style={styles.logoImg} />
            </View>
            <TouchableOpacity style={styles.btncontainer1} onPress={() => { props.navigation.replace('MainScreen') }} >
                <Text style={styles.textbtn1}>Sign in with Phone Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btncontainer2} onPress={() => { props.navigation.replace('MainScreen') }} >
                <Image source={cardImages.appleImg} style={styles.btn2Img} />
                <Text style={styles.textbtn2}>Sign in with Apple ID</Text>
            </TouchableOpacity>
            <Text style={styles.texthaveAcc}>Don’t have an account ? {' '}
                <Text style={styles.signin} onPress={() => { props.navigation.replace('MainScreen') }}>Sign in</Text>
            </Text>
            <Text style={styles.bottomTC} >By creating an account, or signing in, you are agreeing to our  <Text style={styles.bottomTCinner}> Terms of Service </Text> and  <Text style={styles.bottomTCinner}> Privacy Policy.</Text></Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingRight: "18%",
        paddingLeft: "18%"
    },
    logoImgContainer: {
        width: "100%",
        marginBottom: 200
    },

    logoImg: {
        width: '100%',
        objectFit: 'contain'
    },
    btncontainer1: {
        backgroundColor: '#00172A',
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    textbtn1: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    btncontainer2: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00172A',
        marginBottom: 10,
        flexDirection: 'row'
    },
    textbtn2: {
        color: '#00172A',
        fontSize: 16,
        fontWeight: '600'
    },
    btn2Img: {
        height: 20,
        width: 20,
        marginRight: 10
    },
    texthaveAcc: {
        marginBottom: 40,
        fontSize: 10,
    },
    signin: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    bottomTC: {
        textAlign: 'center',
        fontSize: 10,
    },
    bottomTCinner: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default AuthScreen;


