import { View, Linking, Text, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
// import Clipboard from '@react-native-clipboard/clipboard';

const Home = () => {
  const sendWhatsApp = () => {
    let msg = 'type something';
    let phoneWithCountryCode = '+918095128426';

    let mobile =
      Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;

    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then((data) => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure WhatsApp is installed on your device');
          });
      } else {
        alert('Please insert a message to send');
      }
    } else {
      alert('Please insert a mobile number');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={sendWhatsApp}
      >
        <Text>Open WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
