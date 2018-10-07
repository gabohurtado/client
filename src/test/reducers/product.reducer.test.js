import assert from 'assert'

import * as types from '../../store/actions/types'
import configuration from '../../store/reducers/product.reducer'

describe('Product Reducer', () => {

    it(types.FETCH_PRODUCTS, () => {
        const state = {
            result: {},
            item: {},
            path_from_root: [],
            error: '',
        }

        const action = {
            type: types.FETCH_PRODUCTS,
            payload: {
                author: {
                    name: 'Gabo',
                    lastname: 'Hurtado'
                },
                categories: [
                    'Camas y Respaldos',
                    'Ropa de Cama',
                    'Juegos de Dormitorio'
                ],
                items: [{
                        id: 'MLA672691704',
                        title: 'Box Sommier Cajonera Cama',
                        price: {
                            currency: 'ARS',
                            amount: 6499
                        },
                        picture: 'http://mla-s1-p.mlstatic.com/976514-MLA26835647588_022018-I.jpg',
                        condition: 'new',
                        free_shipping: false,
                        sold_quantity: 250,
                        address_state: 'Buenos Aires',
                        path_from_root: 'MLA6378'
                    },
                    {
                        id: 'MLA701142768',
                        title: 'Cama 2 Plazas C/ 6 Cajones Y 2 Bauleras',
                        price: {
                            currency: 'ARS',
                            amount: 7800
                        },
                        picture: 'http://mla-s1-p.mlstatic.com/645534-MLA28247502404_092018-I.jpg',
                        condition: 'new',
                        free_shipping: false,
                        sold_quantity: 50,
                        address_state: 'Capital Federal',
                        path_from_root: 'MLA6378'
                    }
                ],
                path_from_root: [{
                        id: 'MLA1574',
                        name: 'Hogar, Muebles y Jardín'
                    },
                    {
                        id: 'MLA1625',
                        name: 'Dormitorio'
                    }
                ]
            }
        }

        const expected = {
            error: '',
            item: {},
            path_from_root: [],
            result: {
                author: {
                    lastname: 'Hurtado',
                    name: 'Gabo'
                },
                categories: ['Camas y Respaldos', 'Ropa de Cama', 'Juegos de Dormitorio'],
                items: [{
                    address_state: 'Buenos Aires',
                    condition: 'new',
                    free_shipping: false,
                    id: 'MLA672691704',
                    path_from_root: 'MLA6378',
                    picture: 'http://mla-s1-p.mlstatic.com/976514-MLA26835647588_022018-I.jpg',
                    price: {
                        amount: 6499,
                        currency: 'ARS'
                    },
                    sold_quantity: 250,
                    title: 'Box Sommier Cajonera Cama'
                }, {
                    address_state: 'Capital Federal',
                    condition: 'new',
                    free_shipping: false,
                    id: 'MLA701142768',
                    path_from_root: 'MLA6378',
                    picture: 'http://mla-s1-p.mlstatic.com/645534-MLA28247502404_092018-I.jpg',
                    price: {
                        amount: 7800,
                        currency: 'ARS'
                    },
                    sold_quantity: 50,
                    title: 'Cama 2 Plazas C/ 6 Cajones Y 2 Bauleras'
                }],
                path_from_root: [{
                    id: 'MLA1574',
                    name: 'Hogar, Muebles y Jardín'
                }, {
                    id: 'MLA1625',
                    name: 'Dormitorio'
                }]
            }
        }

        assert.deepEqual(configuration(state, action), expected)


    })



    it(types.ERROR_FETCHING_PRODUCTS, () => {
        const state = {
            result: {},
            item: {},
            path_from_root: [],
            error: ''
        }

        const action = {
            type: types.ERROR_FETCHING_PRODUCTS,
            payload: 'Error message'
        }

        const expected = {
            result: {},
            item: {},
            path_from_root: [],
            error: 'Error message'
        }

        assert.deepEqual(configuration(state, action), expected)


    })

    it(types.SHOW_DETAILS, () => {
        const state = {
            result: {},
            item: {},
            path_from_root: [],
            error: ''
        }

        const action = {
            type: types.SHOW_DETAILS,
            payload: {
                author: {
                    lastname: 'Hurtado',
                    name: 'Gabo'
                },
                item: {
                    address_state: 'Buenos Aires',
                    condition: 'new',
                    free_shipping: false,
                    id: 'MLA672691704',
                    path_from_root: 'MLA6378',
                    picture: 'http://mla-s1-p.mlstatic.com/976514-MLA26835647588_022018-I.jpg',
                    price: {
                        amount: 6499,
                        currency: 'ARS'
                    },
                    sold_quantity: 250,
                    title: 'Box Sommier Cajonera Cama'
                },
                path_from_root: [{
                    id: 'MLA1574',
                    name: 'Hogar, Muebles y Jardín'
                }, {
                    id: 'MLA1625',
                    name: 'Dormitorio'
                }]
            }
        }

        const expected = {
            error: '',
            item: {
                author: {
                    lastname: 'Hurtado',
                    name: 'Gabo'
                },
                item: {
                    address_state: 'Buenos Aires',
                    condition: 'new',
                    free_shipping: false,
                    id: 'MLA672691704',
                    path_from_root: 'MLA6378',
                    picture: 'http://mla-s1-p.mlstatic.com/976514-MLA26835647588_022018-I.jpg',
                    price: {
                        amount: 6499,
                        currency: 'ARS'
                    },
                    sold_quantity: 250,
                    title: 'Box Sommier Cajonera Cama'
                },
                path_from_root: [{
                    id: 'MLA1574',
                    name: 'Hogar, Muebles y Jardín'
                }, {
                    id: 'MLA1625',
                    name: 'Dormitorio'
                }]
            },
            path_from_root: [],
            result: {}
        }

        assert.deepEqual(configuration(state, action), expected)

    })

    it(types.ERROR_SHOWING_DETAILS, () => {
        const state = {
            result: {},
            item: {},
            path_from_root: [],
            error: ''
        }

        const action = {
            type: types.ERROR_SHOWING_DETAILS,
            payload: 'Error message'
        }

        const expected = {
            result: {},
            item: {},
            path_from_root: [],
            error: 'Error message'
        }

        assert.deepEqual(configuration(state, action), expected)
    })

    it(types.SET_PATH_FROM_ROOT, () => {
        const state = {
            result: {},
            item: {},
            path_from_root: [],
            error: ''
        }

        const action = {
            type: types.SET_PATH_FROM_ROOT,
            payload: [{
                id: 'MLA1574',
                name: 'Hogar, Muebles y Jardín'
            }, {
                id: 'MLA1625',
                name: 'Dormitorio'
            }]
        }

        const expected = {
            result: {},
            item: {},
            path_from_root: [{
                id: 'MLA1574',
                name: 'Hogar, Muebles y Jardín'
            }, {
                id: 'MLA1625',
                name: 'Dormitorio'
            }],
            error: ''
        }

        assert.deepEqual(configuration(state, action), expected)
    })

    it(types.CLEAN_PATH_FROM_ROOT, () => {
        const state = {
            result: {},
            item: {},
            path_from_root: [{
                id: 'MLA1574',
                name: 'Hogar, Muebles y Jardín'
            }, {
                id: 'MLA1625',
                name: 'Dormitorio'
            }],
            error: ''
        }

        const action = {
            type: types.CLEAN_PATH_FROM_ROOT,
            payload: []
        }

        const expected = {
            result: {},
            item: {},
            path_from_root: [],
            error: ''
        }

        assert.deepEqual(configuration(state, action), expected)
    })

})