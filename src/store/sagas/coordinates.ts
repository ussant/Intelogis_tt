import {call, put, takeEvery} from "redux-saga/effects"
async function fetchCoords({payload}: { payload: string }) {
    const request = await fetch(`http://router.project-osrm.org/route/v1/driving/${payload}?overview=false`);
    return await request.json()
}

type LoadCoordsArgs = {
    type: string,
    payload: string
}

function* loadCoords(args: LoadCoordsArgs) {
    try {
        const {waypoints} = yield call(fetchCoords, args)
        const coordinates = waypoints.map((wp: { location: Location; }) => wp.location)
        yield put({type: "SET_COORDS", payload: coordinates})
    } catch (err) {
        console.error("error in getCoordinates", err)
    }
}
export default function* mySaga () {
    yield takeEvery("LOAD_COORDS", loadCoords)
}
