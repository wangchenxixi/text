import { login } from "../services";
export default {
    namespace: 'user',
    state: {},
    subscriptions: {
        setup({ dispatch, history }) { },
    },
    effects: {
        *login({ payload }, { call, put }) {
            console.log('payload..', payload, login);
            let data = yield call(login,payload);
            console.log("data...", data)
        },
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' })
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload }
        }
    }
}
