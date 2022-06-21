import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
    const nested = fromJS(object);
    return nested.getIn(array, undefined);
};
export default accessImmutableObject;

