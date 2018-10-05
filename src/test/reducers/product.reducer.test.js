import assert from 'assert'

import * as types from '../../store/actions/types'
import configuration from '../../store/reducers/product.reducer'

describe('Product Reducer', () => {

    it(types.FETCH_PRODUCTS, () => {
        const state = {
            items: [],
            item: {},
            error: ''
        }

        const action = {
            type: types.FETCH_PRODUCTS,
            payload: [
                {
                    item: {
                        id: 1
                    },
                    price: {
                        amount: 100
                    }
                }
            ]
        }

        const expected = {
            items: [
                {
                    item: {
                        id: 1
                    },
                    price: {
                        amount: 100
                    }
                }
            ],
            item: {},
            error: ''
        }

        assert.deepEqual(configuration(state, action), expected)


    })

    it(types.ERROR_FETCHING_PRODUCTS, () => {
        const state = {
            items: [],
            item: {},
            error: ''
        }

        const action = {
            type: types.ERROR_FETCHING_PRODUCTS,
            payload: 'Error message'
        }

        const expected = {
            items: [],
            item: {},
            error: 'Error message'
        }

        assert.deepEqual(configuration(state, action), expected)


    })

    it(types.SHOW_DETAILS, () => {
        const state = {
            items: [],
            item: {},
            error: ''
        }

        const action = {
            type: types.SHOW_DETAILS,
            payload: {
                item: {
                    id: 1
                },
                price: {
                    amount: 100
                }
            }
        }

        const expected = {
            items: [],
            item: {
                item: {
                    id: 1
                },
                price: {
                    amount: 100
                }
            },
            error: ''
        }

        assert.deepEqual(configuration(state, action), expected)

    })

    it(types.ERROR_SHOWING_DETAILS, () => {
        const state = {
            items: [],
            item: {},
            error: ''
        }

        const action = {
            type: types.ERROR_SHOWING_DETAILS,
            payload: 'Error message'
        }

        const expected = {
            items: [],
            item: {},
            error: 'Error message'
        }

        assert.deepEqual(configuration(state, action), expected)


    })

})