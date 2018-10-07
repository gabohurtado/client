import assert from 'assert'

import * as types from '../../store/actions/types'
import configuration from '../../store/reducers/general.reducer'

describe('General Reducer', () => {

    it(types.START_LOADING, () => {
        const state = {
            loading: false
        }

        const action = {
            type: types.START_LOADING
        }

        const expected = {
            loading: true
        }

        assert.deepEqual(configuration(state, action), expected)


    })

    it(types.END_LOADING, () => {
        const state = {
            loading: true
        }

        const action = {
            type: types.END_LOADING
        }

        const expected = {
            loading: false
        }

        assert.deepEqual(configuration(state, action), expected)
    })
})