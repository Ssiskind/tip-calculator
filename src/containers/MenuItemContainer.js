import MenuItem from '../components/MenuItem';
import { removeItem } from "../store/items/actions";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: () => dispatch(removeItem(ownProps.uuid))
    }
}

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem)