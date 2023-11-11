import { Summary } from "../components/Summary"
import { connect } from "react-redux"
import { selectSubtotal, selectTipAmount, selectTotal } from "../store/items/selectors";

const mapStatetoProps = (state) => {
    // const items = state.items;
    // get subtotal through iteration

    // let subtotal = 0;
    // for (const item of items) {
    //     subtotal += item.quantity * item.price;
    // }

    // get subtotal using reduce
    // const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // const tipAmount = subtotal * (state.tipPercentage / 100);

    // const total = subtotal + tipAmount;

    const subtotal = selectSubtotal(state);
    const tipAmount = selectTipAmount(state);
    const total = selectTotal(state);

    return {
        subtotal,
        tipAmount,
        total
    };
};

export const SummaryContainer = connect(mapStatetoProps)(Summary);
