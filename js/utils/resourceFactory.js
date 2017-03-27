import axios from 'axios';
import { ENDPOINT_URL } from '../constants/AppConstants';

module.exports = {

  getResponse: function(resource,criteria){
    if (typeof criteria !== 'undefined' && typeof criteria.param !== 'undefined'){
      var encodedLocation = encodeURIComponent(criteria.param.value);
    }

    var requestUrl =  typeof criteria !== 'undefined' && typeof criteria.param !=='undefined' && criteria.param.value.length > 0 ?`${ENDPOINT_URL}${resource}?${criteria.param.key}=${encodedLocation}`:`${ENDPOINT_URL}${resource}`;
    return axios.get(requestUrl).then(function (res){
      if (res.data._links && res.data._links.item){
        return res.data._links.item;
      }
    }, function(res){
      throw new Error('Error get operation to ' + `${ENDPOINT_URL}/${resource}`);
    });
  },

  getResponseFromURL: function(url, payload){

    return axios.get(url).then(function (res){
      if (res.data){
        return res.data;
      }
    }, function(res){
      throw new Error('Error get operation to ' + url);
    });
  },

  patch: function(url, payload){

    return axios.patch(url, payload).then(function (res){
      if (res.data){
        return res.data;
      }
    }, function(res){
      throw new Error('Error get operation to ' + url);
    });
  }

}
