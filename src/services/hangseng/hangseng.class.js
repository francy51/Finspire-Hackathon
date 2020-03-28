var bankConfig = require("../../../config/default.json");
var axios = require("axios");

/* eslint-disable no-unused-vars */
exports.Hangseng = class Hangseng {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    try {
      if (params.query.accountType == 0) {
        return this.getSavingsAccount();
      }
      if (params.query.accountType == 1) {
        return this.getCurrentAccount();
      }
      if (params.query.accountType == 2) {
        return this.getCreditCardAccounts();
      }
      return "missing account type";
    } catch (err) {
      return err;
    }
  }

  // get hang seng current account
  async getCurrentAccount() {
    try {
      let urlString = (
        bankConfig.bank.hangseng.url +
        "/open-banking/v1.0/personal-current-accounts"
      ).toString();

      const response = await axios({
        method: "get",
        url: urlString,
        headers: {
          ClientID: bankConfig.bank.hangseng.ClientID,
          ClientSecret: bankConfig.bank.hangseng.ClientSecret
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // get hang seng savings account
  async getSavingsAccount() {
    try {
      let urlString = (
        bankConfig.bank.hangseng.url +
        "/open-banking/v1.0/personal-savings-accounts"
      ).toString();

      const response = await axios({
        method: "get",
        url: urlString,
        headers: {
          ClientID: bankConfig.bank.hangseng.ClientID,
          ClientSecret: bankConfig.bank.hangseng.ClientSecret
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
        bankConfig.bank.hangseng.url +
        "/open-banking/v1.0/personal-credit-cards"
      ).toString();

      const response = await axios({
        method: "get",
        url: urlString,
        headers: {
          ClientID: bankConfig.bank.hangseng.ClientID,
          ClientSecret: bankConfig.bank.hangseng.ClientSecret
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  // async get(id, params) {
  //   return {
  //     id,
  //     text: `A new message with ID: ${id}!`
  //   };
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
