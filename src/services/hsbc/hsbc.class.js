/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

var bankConfig = require("../../../config/default.json");
var axios = require("axios");

exports.Hsbc = class Hsbc {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    try {
      if (params.query.accountType == 0) {
        return this.getIntegratedAccounts();
      }
      if (params.query.accountType == 1) {
        return this.getCreditCardAccounts();
      }
      return "missing account type";
    } catch (err) {
      return err;
    }
  }

  //Finds the users hsbc integrated account data  in future make use of param.users to access specifically their data
  async getIntegratedAccounts() {
    try {
      let urlString = (
        bankConfig.bank.hsbc.url +
        "/open-banking/v1.0/personal-all-in-one-and-savings-accounts"
      ).toString();

      const response = await axios({
        method: "get",
        url: urlString,
        headers: {
          ClientID: bankConfig.bank.hsbc.ClientID,
          ClientSecret: bankConfig.bank.hsbc.ClientSecret
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getCreditCardAccounts() {
    try {
      let urlString = (
        bankConfig.bank.hsbc.url + "/open-banking/v1.0/personal-credit-cards"
      ).toString();

      const response = await axios({
        method: "get",
        url: urlString,
        headers: {
          ClientID: bankConfig.bank.hsbc.ClientID,
          ClientSecret: bankConfig.bank.hsbc.ClientSecret
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // async get(id, params) {
  //   return id;
  // }

  // async create(data, params) {
  //   if (Array.isArray(data)) {
  //     return Promise.all(data.map(current => this.create(current, params)));
  //   }

  //   return data;
  // }

  // async update(id, data, params) {
  //   return data;
  // }

  // async patch(id, data, params) {
  //   return data;
  // }

  // async remove(id, params) {
  //   return { id };
  // }
};
