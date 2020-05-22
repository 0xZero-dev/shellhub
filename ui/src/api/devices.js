import http from '@/helpers/http'
const axios = require('axios')

export const
    fetchDevices = async (per_page, page) => {
        return http().get('/devices?per_page='+per_page.toString()+'&page='+page.toString())
    },

    removeDevice = async (uid) => {
        return http().delete(`/devices/${uid}`)
    },

    renameDevice = async (data) => {
        return http().patch(`/devices/${data.uid}`, { name: data.name })
    },

    getDevice = async (uid) => {
        return http().get(`/devices/${uid}`)
    },

    enableCallhome = async (data) => {
       return axios.get(`http://54.77.31.115:5000/enable/${data.name}`)
    },
    
    disableCallhome = async (data) => {
       return axios.get(`http://54.77.31.115:5000/disable/${data.name}`)
    }
