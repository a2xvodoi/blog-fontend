const utilsCommon = {
  /**
   * Setting storage type: storageType = localStorage, sessionStorage
   */
  storageType: "localStorage",

  /**
   * define key storage data
   */
  storageKeyData: "blog",

  /**
   * Clear storage data
   */
  clearStorage() {
    //if they did not define storage type not defined then throw error for developer
    if (
      utilsCommon.storageKeyData === undefined ||
      utilsCommon.storageType === undefined
    ) {
      throw new Error(
        "Problem with clearing form storage: Make sure storage type is defined."
      );
    } else {
      //remove items from storage on submit
      window[utilsCommon.storageType].clear();
    }
  },

  /**
   * delete data in storage by array keys
   *
   * @param {array} keys
   */
  deleteStorageByKey(keys) {
    if (keys && keys.length > 0) {
      let values = JSON.parse(
        window[utilsCommon.storageType].getItem(utilsCommon.storageKeyData)
      );
      let key;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        if (values[key]) {
          delete values[key];
        }
      }

      window[utilsCommon.storageType].setItem(
        utilsCommon.storageKeyData,
        JSON.stringify(values)
      );
    }
  },

  /**
   * Get data from storage by key, formate key: key.key1.key2
   *
   * @param {String} _key
   * @returns mixed
   */
  getStorageDataByKey(_key) {
    //if they did not define storage type not defined then throw error for developer
    if (
      utilsCommon.storageKeyData === undefined ||
      utilsCommon.storageType === undefined
    ) {
      throw new Error(
        "Problem with clearing form storage: Make sure storage type is defined."
      );
    }

    let data = JSON.parse(
      window[utilsCommon.storageType].getItem(utilsCommon.storageKeyData)
    );
    // Split using a . character
    let arrKey = _key.split(".");
    let key;
    const indxLast = arrKey.length - 1;
    for (let i = 0; i < arrKey.length; i++) {
      key = arrKey[i];
      if (data && data[key]) {
        if (i === indxLast) {
          return data[key];
        } else {
          data = data[key];
        }
      } else {
        return null;
      }
    }

    return null;
  },

  /**
   * Save data into storage, _key only support 2 level
   *
   * @param {String} _key : key.subkey
   * @param {Object} _data
   */
  saveStorageData(_key, _data) {
    let storageData = JSON.parse(
      window[utilsCommon.storageType].getItem(utilsCommon.storageKeyData)
    );
    if (!storageData) {
      storageData = {};
    }

    // Split using a . character
    let arrKey = _key.split(".");
    let key = arrKey[0];
    if (arrKey.length === 2) {
      let key1 = arrKey[1];
      if (!storageData[key]) {
        storageData[key] = {};
      }

      storageData[key][key1] = _data;
    } else {
      storageData[key] = _data;
    }

    //lastly we set our values for current form in storage as JSON string. Parsed as JSON on page load.
    window[utilsCommon.storageType].setItem(
      utilsCommon.storageKeyData,
      JSON.stringify(storageData)
    );
  },
};

export default utilsCommon;
