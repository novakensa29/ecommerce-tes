const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
  isLoadingScreen: false,
  isLoadingScreenBarner: false,
  error: 'error',
  global: false,
  kategoriListGlobal: [],
  masterParamList: [],
  provinsiListGlobal: [],
  kabkotaListGlobal: [],
  kelurahanListGlobal: [],
  kecamatanListGlobal: [],
  provinsiList: [],
  kabkotaList: [],
  kelurahanList: [],
  kecamatanList: [],
  barnerGlobalList: [],
  barnerGlobalCount: 0,
  barnerList: [],
  barnerCount: 0,
  
  loadingValue : 0.1,
  cekKeterangan : '',
 
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
      error: action.value.error,
    };
  }
  else if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  else if (action.type === 'SET_LOADING_SCREEN') {
    return {
      ...state,
      isLoadingScreen: action.value,
    };
  }
  else if (action.type === 'SET_LOADING_SCREEN_BARNER') {
    return {
      ...state,
      isLoadingScreenBarner: action.value,
    };
  }
 
  
  else if (action.type === 'SET_MASTER_PARAM') {
    return {
      ...state,
      masterParamList: action.value,
    };
  }
  else if (action.type === 'SET_PROVINSI_GLOBAL') {
    return {
      ...state,
      provinsiListGlobal: action.value,
    };
  }
  else if (action.type === 'SET_KABKOTA_GLOBAL') {
    return {
      ...state,
      kabkotaListGlobal: action.value,
    };
  }
  else if (action.type === 'SET_KECAMATAN_GLOBAL') {
    return {
      ...state,
      kecamatanListGlobal: action.value,
    };
  }
  else if (action.type === 'SET_KELURAHAN_GLOBAL') {
    return {
      ...state,
      kelurahanListGlobal: action.value,
    };
  }
  
  
  else if (action.type === 'SET_PROVINSI') {
    return {
      ...state,
      provinsiList: action.value,
    };
  }
  else if (action.type === 'SET_KABKOTA') {
    return {
      ...state,
      kabkotaList: action.value,
    };
  }
  
  else if (action.type === 'SET_GLOBAL') {
    return {
      ...state,
      global: action.value,
    };
  }
  else if (action.type === 'SET_BARNER') {
    return {
      ...state,
      barnerList: action.value,
    };
  }
  else if (action.type === 'SET_BARNER_GLOBAL') {
    return {
      ...state,
      barnerGlobalList: action.value,
    };
  }
  else if (action.type === 'SET_BARNER_COUNT') {
    return {
      ...state,
      barnerCount: action.value,
    };
  }
  else if (action.type === 'SET_BARNER_GLOBAL_COUNT') {
    return {
      ...state,
      barnerGlobalCount: action.value,
    };
  }
  
  
  else if (action.type === 'SET_STATUS_SARAN') {
    return {
      ...state,
      statusSaran: action.value,
    };
  }
  else if (action.type === 'SET_LOADING_VALUE') {
    return {
      ...state,
      loadingValue: action.value,
    };
  }
  else if (action.type === 'SET_TOKEN_MESSAGE') {
    return {
      ...state,
      tokenMessage: action.value,
    };
  }
  
  else if (action.type === 'SET_CEK_KETERANGAN') {
    return {
      ...state,
      cekKeterangan: action.value,
    };
  }
  else if (action.type === 'SET_IS_USER_ONLINE') {
    return {
      ...state,
      isUserOnline: action.value,
    };
  } else if (action.type === 'SET_IS_COUNT_USER_ONLINE') {
    return {
      ...state,
      isCountUserOnline: action.value,
    };
  } else if (action.type === 'SET_IS_COUNT_USER_DRIVER_ONLINE') {
    return {
      ...state,
      isCountUserDriverOnline: action.value,
    };
  }else if (action.type === 'SET_IS_VISIBLE_MODAL') {
    return {
      ...state,
      isVisibleModal: action.value,
    };
  }else if (action.type === 'SET_IS_WAITED') {
    return {
      ...state,
      isWaited: action.value,
    };
  }else if (action.type === 'SET_INTERVAL') {
    return {
      ...state,
      interval: action.value,
    };
  }else if (action.type === 'SET_IS_SOCKET') {
    return {
      ...state,
      isSocket: action.value,
    };
  }else if (action.type === 'SET_PENDAFTARAN') {
    return {
      ...state,
      pendaftaran: action.value,
    };
  }else if (action.type === 'SET_MY_ORDER_LIST') {
    return {
      ...state,
      myOrderList: action.value,
    };
  }else if (action.type === 'SET_MY_ORDER_COUNT') {
    return {
      ...state,
      myOrderCount: action.value,
    };
  }else if (action.type === 'SET_IS_INIT_DATA_MY_KATEGORI') {
    return {
      ...state,
      isInitDataMyKategori: action.value,
    };
  }else if (action.type === 'SET_PENCARIAN') {
    return {
      ...state,
      pencarian: action.value,
    };
  }else if (action.type === 'SET_PENCARIAN_LIST') {
    return {
      ...state,
      pencarianList: action.value,
    };
  }else if (action.type === 'SET_IS_AUTO_FOCUS') {
    return {
      ...state,
      isAutoFocus: action.value,
    };
  }else if (action.type === 'SET_IS_GET_LOCATION') {
    return {
      ...state,
      isGetLocation: action.value,
    };
  }
  return state;
};

