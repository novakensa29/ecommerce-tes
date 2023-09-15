import axios from 'axios';
// import { useSelector } from 'react-redux';
import { getArtikelLB, getCountMyCartLB, getMyNotifActiveCountLB, getMyPayLB } from '.';
import ApiConfig from '../../config/ApiConfig';
// import ApiHeader from '../../config/ApiHeader';
import { getData, showMessage, showToast, showToasty, storeData } from '../../utils';
import { getMyInvoice } from './invoice';
import { getCargoKandangAlternatif } from './myCargo';
import { getCountMyCart } from './myCart';
import { getMyPetMitra } from './myMitraMarket';
import { getMyPetShopMitra } from './myMitraPetShop';
import { getMyNotifActiveCount } from './myNotif';
import { getMyPay } from './myPay';
// import { getAllUserLB } from './auth';
import moment from 'moment';
import SweetAlert from 'react-native-sweet-alert';
import Geolocation from 'react-native-geolocation-service';

import Geocoder from 'react-native-geocoding';
import { setUserLocationLB } from './auth';

export const setLoading = (value) => {
  return {
    type: 'SET_LOADING',
    value,
  };
};
export const setLoadingScreen = (value) => {
  return {
    type: 'SET_LOADING_SCREEN',
    value,
  };
};
export const setLoadingScreenBarner = (value) => {
  return {
    type: 'SET_LOADING_SCREEN_BARNER',
    value,
  };
};
export const setGlobal = (value) => {
  return {
    type: 'SET_GLOBAL',
    value,
  };
};
export const setError = (value) => {
  return {
    type: 'SET_ERROR',
    value,
  };
};
export const setStatusSaran = (value) => {
  return {
    type: 'SET_STATUS_SARAN',
    value,
  };
};
export const setLoadingValue = (value) => {
  return {
    type: 'SET_LOADING_VALUE',
    value,
  };
};
export const setCekKeterangan = (value) => {
  return {
    type: 'SET_CEK_KETERANGAN',
    value,
  };
};

export const getMasterDataLB = (navigation) => async (dispatch) => {
  //console.log('params global1', params);
  dispatch({ type: 'SET_LOADING_VALUE', value: 0.25 });
  // setCekKeterangan('memeriksa master data...')
  dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa master data...' });

  await axios
    .get(`${ApiConfig}/api/Master_Params?filter=%7B%22where%22%3A%7B%22and%22%3A%20%5B%7B%22status%22%3A%20%22Active%22%7D%5D%7D%7D`
      // , {
      //   params: params,
      // }
    )
    .then((resMasterParam) => {
      dispatch({ type: 'SET_LOADING_VALUE', value: 0.45 });
      // console.log('res global lb', resMasterParam);
      dispatch({ type: 'SET_MASTER_PARAM', value: resMasterParam.data });
      storeData('masterParamList', { value: resMasterParam.data });
    })
    .catch((err) => {
      err.isError = true
      return dispatch(setError(err));
    })
    .then(async () => {
      // setCekKeterangan('memeriksa data jenis hewan...')
      dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data jenis hewan...' });

      await axios.get(`${ApiConfig}/api/Pet_Jenis`).then((resPetJenis) => {
        dispatch({ type: 'SET_LOADING_VALUE', value: 0.5601 });
        // console.log('res pet jenis lb', resPetJenis);

        dispatch({ type: 'SET_PET_JENIS', value: resPetJenis.data });
        storeData('petJenisList', { value: resPetJenis.data });
      })
        .catch((err) => {
          err.isError = true
          return dispatch(setError(err));
        })
    })
    .then(async () => {
      // setCekKeterangan('memeriksa data ...')
      dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data ..' });

    })

    .then(async () => {
      // setCekKeterangan('memeriksa data provinsi...')
      dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data provinsi...' });

      await axios.get(`${ApiConfig}/api/Provinces`)
        .then((resProvinsi) => {
          console.log('resProvinsi',)
          dispatch({ type: 'SET_LOADING_VALUE', value: 0.65 });

          dispatch({ type: 'SET_PROVINSI', value: resProvinsi.data });
          //console.log('res resProvinsi lb', resProvinsi);
          storeData('provinsiList', { value: resProvinsi.data });
        })
        .catch((err) => {
          err.isError = true
          return dispatch(setError(err));
        })
    })

    .then(async () => {
      // setCekKeterangan('memeriksa data provinsi...')
      dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data provinsi...' });

      await axios.get(`${ApiConfig}/api/RO_Provinsis`).then((resRoProvinsi) => {
        dispatch({ type: 'SET_LOADING_VALUE', value: 0.70 });
        //console.log('res resRoProvinsi lb', resRoProvinsi);
        dispatch({ type: 'SET_RO_PROVINSI_GLOBAL', value: resRoProvinsi.data });
        storeData('roProvinsiListGlobal', { value: resRoProvinsi.data });
      })
        .catch((err) => {
          err.isError = true
          showToasty(`Server sedang sibuk cobalah beberapa saat lagi ${err?.message} !!!`, 'error');

          return dispatch(setError(err));
        })
    })

    .then(async () => {
      // setCekKeterangan('memeriksa data kota...')
      dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data kota...' });

      await axios
        .get(`${ApiConfig}/api/RO_Cities`).then((resRoCisties) => {
          dispatch({ type: 'SET_LOADING_VALUE', value: 0.75 });
          // console.log('res resRoCisties lb', resRoCisties);

          dispatch({ type: 'SET_RO_CITIES_GLOBAL', value: resRoCisties.data });
          storeData('roCitiesListGlobal', { value: resRoCisties.data });
        })
        .catch((err) => {
          err.isError = true
          showToasty(`Server sedang sibuk cobalah beberapa saat lagi ${err?.message} !!!`, 'error');

          return dispatch(setError(err));
        })
    })

    .then(async () => {
   
    })
    
    .then(async () => {
      setLoadingValue(0.89);
      dispatch(setGlobal(true));
     
      dispatch({ type: 'SET_LOADING_VALUE', value: 0.91 });
      getData('authUser').then(async (res) => {

        if (res) {
          getData('akunList').then(async (resAkunList) => {
            if (resAkunList) {
                await dispatch({type: 'SET_AKUN_LIST', value: resAkunList?.value});
              }
            })
          getData('token').then(async (resToken) => {
            if (resToken) {
            
             
              await dispatch({ type: 'SET_AUTH_USER', value: res });
              if (authUser?.fk_detail) {
                await dispatch({ type: 'SET_AUTH_DETAIL', value: authUser?.Detail });
              }
              dispatch({ type: 'SET_TOKEN', value: resToken.value });
              
              dispatch({ type: 'SET_LOADING_VALUE', value: 0.95 });
              
              return navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });

            } else {
              return navigation.replace('Login');
            }
          })
        } else {
          getData('intro').then((res) => {
            if (!res) {
              return navigation.replace('Intro');
            } else {
              // return navigation.replace('Login');
              return navigation.reset({
                index: 0, routes: [{
                  name: 'MainApp',
                  state: {
                    routes: [
                      {
                        name: "MyMarket",
                      }
                    ]
                  }
                }]
              });
            }
          })
        }
      });
    })
    .catch((err) => {
      console.log('err', JSON.stringify(err));
      showToasty(`Koneksi Internet tidak ada !!! (${err.message})`, 'show')

      err.isError = true;
      return dispatch(setError(err));
     
    })
    .finally(async () => {
      dispatch(setLoading(false));

    });
};

export const getDataAppLB = (navigation, isLoading) => async (dispatch) => {
  console.log('msg2 lb');
 
  await getData('masterParamList')
    .then(async (res) => {
      // console.log('res master data', res)
      if (res) {
        // alert(1)
        await dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa master data...' });
        await dispatch({ type: 'SET_MASTER_PARAM', value: res?.value });
        await dispatch({ type: 'SET_LOADING_VALUE', value: 0.40 });

      } else {
        // alert(2)
        // await dispatch({type: 'SET_LOADING_VALUE', value: 0.40});
        await dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa master data server...' });

        await axios
          .get(`${ApiConfig}/api/Master_Params?filter=%7B%22where%22%3A%7B%22and%22%3A%20%5B%7B%22status%22%3A%20%22Active%22%7D%5D%7D%7D`)
          .then(async (resMasterParam) => {
            await dispatch({ type: 'SET_LOADING_VALUE', value: 0.45 });
            // console.log('res global lb', resMasterParam);
            await dispatch({ type: 'SET_MASTER_PARAM', value: resMasterParam.data });
            await storeData('masterParamList', { value: resMasterParam.data });
          })
          .catch((err) => {
            err.isError = true
            dispatch(setError(err));
            showToasty(`Server sedang sibuk cobalah beberapa saat lagi ${err?.message} !!!`, 'error');

          })
      }
    })
 
 
 
  await getData('provinsiList')
    .then(async (res) => {
      if (res) {
        // alert(1)
        await dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data provinsi...' });

        await dispatch({ type: 'SET_PROVINSI', value: res.value });
        await dispatch({ type: 'SET_LOADING_VALUE', value: 0.60 });

      } else {
        // alert(2)

        dispatch({ type: 'SET_CEK_KETERANGAN', value: 'memeriksa data provinsi server...' });

        await axios.get(`${ApiConfig}/api/Provinces`)
          .then((resProvinsi) => {
            // console.log('resProvinsi',)
            dispatch({ type: 'SET_LOADING_VALUE', value: 0.65 });

            dispatch({ type: 'SET_PROVINSI', value: resProvinsi.data });
            //console.log('res resProvinsi lb', resProvinsi);
            storeData('provinsiList', { value: resProvinsi.data });
          })
          .catch((err) => {
            err.isError = true
            dispatch(setError(err));
            showToasty(`Server sedang sibuk cobalah beberapa saat lagi ${err?.message} !!!`, 'error');

          })
      }
    })
  
 
    await getData('barnerGlobalList').then(async (resBarnerList) => {
      //  storeData('barnerGlobalList', null);
      // console.log('resBarnerList',resBarnerList)
      if (resBarnerList) {
        resBarnerList?.value?.forEach((d, i) => {
          d.source = {
            uri: d.image_url,
          },
            d.title = d.judul
        })
        await dispatch({ type: 'SET_BARNER_GLOBAL', value: resBarnerList?.value });
      } else {
        await dispatch(getBarnerLB({ status: 'Active' }));
      }
    })
  // dispatch({type: 'SET_GLOBAL', value: true});
  await getData('authUser')
    .then(async (res) => {

      if (res) {
        getData('akunList').then(async (resAkunList) => {
          if (resAkunList) {
              await dispatch({type: 'SET_AKUN_LIST', value: resAkunList?.value});
            }
          })
        getData('token').then(async (resToken) => {
          if (resToken) {

          
          
           
          }
        })
       

        await dispatch({ type: 'SET_LOADING_VALUE', value: 0.96 });
        await dispatch({ type: 'SET_AUTH_USER', value: res });
        console.log('res',res)

        if (res?.fk_detail) {
          await dispatch({ type: 'SET_AUTH_DETAIL', value: res?.Detail });
        }
       
        
          return navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
    
      } else {
        
            return navigation.replace('Intro');
         

      }
    })
    .finally(async () => {
      dispatch(setLoading(false));


    });
};
export const getKecamatanList = (navigation) => (dispatch) => {
  //alert('ok')
  // dispatch(setLoading(true));

  //dispatch({type: 'SET_PROVINSI', value: res});
  // dispatch(setLoading(false));
};

export const getRoCitiesLB = (params, navigation) => async (dispatch) => {

  console.log('params get barner', params);
  if (params?.province_id) {
    dispatch(setLoading(true));
    //return;
    const settings = {
      headers: {
        Accept: 'application/json',
      },
    };
    await axios.get(`${ApiConfig}/api/RO_Cities?filter={"where":{"and": [{"province_id": ${params?.province_id}}]}}`, settings)
      .then((res) => {
        console.log('res  get kategori', res);
        //showToasty('success memngambil invoice !!!', 'success');
        dispatch({ type: 'SET_RO_CITIES', value: res.data });

      })
      .catch((err) => {
        console.log('err', err);
        showToasty(`Server sedang sibuk cobalah beberapa saat lagi ${err?.message} !!!`, 'error');
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }
};
export const getRoSubdistrictsLB = (params, navigation) => async (dispatch) => {
  console.log('params get barner', params);
  //return;

  if (params?.city_id) {
    dispatch(setLoading(true));
    const settings = {
      headers: {
        Accept: 'application/json',
      },
    };
    await axios.get(`${ApiConfig}/api/RO_Subdistricts?filter={"where":{"and": [{"city_id": ${params?.city_id}}]}}`, settings)
      .then((res) => {
        console.log('res  get kategori', res);
        //showToasty('success memngambil invoice !!!', 'success');
        dispatch({ type: 'SET_RO_SUBDISTRICTS', value: res.data });

      })
      .catch((err) => {
        console.log('err', err);
        showToasty('Server sedang sibuk cobalah beberapa saat lagi !!!', 'error');
      })
      .finally(() => {
        dispatch(setLoading(false));
      });

  }
};




