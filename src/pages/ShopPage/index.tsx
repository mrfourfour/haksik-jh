import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import elevate from '../../utils/shadow';

function ShopPage() {
    const [ modalVisible, setModalVisible ] = useState<boolean>(false);

    function toggleModal() {
        setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Modal 
              animationType="slide" 
              transparent={true} 
              visible={modalVisible}

            >
                <TouchableOpacity style={{flex: 1}}onPress={toggleModal} />
                <SafeAreaView edges={['bottom']} style={{
                    position: 'absolute',
                    backgroundColor: '#aa9970', 
                    marginHorizontal: 24, 
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    padding: 24,
                    bottom:0,
                    left: 0,
                    right: 0,
                    justifyContent: 'flex-end',
                    ...elevate(10)
                    }}
                >
                    <Text>Hello</Text>
                </SafeAreaView>
            </Modal>

            <TouchableOpacity onPress={toggleModal}>
                <Text>hi</Text>
            </TouchableOpacity>
            <Text>Shop Page</Text>
        </SafeAreaView>
    )
}

export default ShopPage;