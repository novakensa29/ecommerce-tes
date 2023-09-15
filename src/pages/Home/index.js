import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ms from '../../utils/ms'
import { windowWidth } from '../../utils/constants'
import { LuckyDraw, BookTestDrive, BookService, THS, Catalog, Calculator, ClaimInsurance, ServiceBerkala, TipsTrick, Trade, DealerLocation, IconAll, IconBaju, IconBarnner, IconBell, IconCar, IconCart, IconDelivery, IconDicuci, IconDress, IconFastDelivery, IconFreeDelivery, IconLocation, IconPromo, IconSepatu, IconStarMitra, IconUser } from '../../assets/icon'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../utils'
import { Event, Gap, MainFeature, Paket } from '../../components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
const Home = ({navigation}) => {
  const dispatch =  useDispatch();
  const [paketList, setPaketList] = useState([
    {
      name : 'Kiloan Promo Reguler 3 Hari, Cikutra',
      image : IconBaju,
      jarak : '0.5 km dari lokasi Anda',
      biaya: 5000,
      Mitra: {
        name: 'Tayaka Laundry',
        rating: 4.4, 
        alamat : "Jl. Cikutra Baru, No. 120, Cibeunying Kaler, Bandung",
      },
      Order: {
        parfum: 'Amber Wood'
      },
      Pengiriman: {
        metode: 'Diantar - Jemput Sendiri'
      },
    },
    {
      name : 'Satuan Premium Express 1 Hari, Cikutra',
      image : IconDress,
      jarak : '0.5 km dari lokasi Anda',
      biaya: 15000,
      Mitra: {
        name: 'Tayaka Laundry',
        rating: 4.4,
        alamat : "Jl. Cikutra Baru, No. 120, Cibeunying Kaler, Bandung",
      },
      Order: {
        parfum: 'Amber Wood'
      },
      Pengiriman: {
        metode: 'Diantar - Jemput Sendiri'
      },
    },
    {
      name : 'Sepatu Besok Bersih, Cikutra',
      image : IconSepatu,
      jarak : '0.5 km dari lokasi Anda',
      biaya: 25000,
      Mitra: {
        name: 'Tayaka',
        rating: 4.5,
        alamat : "Jl. Cikutra Baru, No. 120, Cibeunying Kaler, Bandung",
      },
      Order: {
        parfum: 'Amber Wood'
      },
      Pengiriman: {
        metode: 'Diantar - Jemput Sendiri'
      },
    }
  ])
  return (
    <View style={[ms.containerPage]}>
      <ScrollView >
        <View style={{alignItems:'center'}}>
          <View style={{paddingTop: 60, paddingBottom:30, flexDirection: 'row'}}>
            <Text style={{fontSize:30, color:'yellow', fontWeight:'400'}}>Hello,</Text>
            <Text style={{fontSize:30, color:'yellow', fontWeight:'700'}}>Bitna Putri</Text>
          </View>
          <View style={[styles.card, ms.aiJc()]}>
            <Text style={{fontSize:25, fontWeight: '700'}}>160</Text>
            <Text style={{fontSize:14, color: 'yellow'}}>Kumpulkan Koin Hasjrat</Text>
          </View>
        </View>
        <View style={[ms.pdV(30)]}>
          <View style={styles.wrapperMainFeature}>
            <MainFeature title={"Lucky Draw"} img={LuckyDraw} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Book Test Drive"} img={BookTestDrive} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Book Service"} img={BookService} onPress={() => { }} width={"20%"} />
            <MainFeature title={"THS"} img={THS} onPress={() => { }} width={"20%"} />
          </View>
          <Gap height={15} />
          <View style={styles.wrapperMainFeature}>
            <MainFeature title={"Catalog"} img={Catalog} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Calculator"} img={Calculator} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Claim Insurance"} img={ClaimInsurance} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Service Berkala"} img={ServiceBerkala} onPress={() => { }} width={"20%"} />
          </View>
          <Gap height={15} />
          <View style={styles.wrapperMainFeature}>
            <MainFeature title={"Tips & Trick"} img={TipsTrick} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Trade In"} img={Trade} onPress={() => { }} width={"20%"} />
            <MainFeature title={"Dealer Location"} img={DealerLocation} onPress={() => { }} width={"20%"} />
            <View style={{width:'20%'}}/>
          </View>
        </View>
        <Gap height={4} backgroundColor={"#F5F5F5"} />
        <View style={[ms.pdH(12)]}>
          <View style={[ms.pdV(10)]}>
            <Text style={[ms.fzBC(16, '600', '#222222')]}>Promotion</Text>
          </View>
          <View style={[ms.pdV(10), ms.pdB(100)]}>
            <Event/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  wrapperMainFeature: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 0,
    flexWrap: 'wrap',
  },
  card: {
    paddingBottom: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 100      ,
    },
    shadowOpacity: 1.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
})