import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../../redux/dialogsReducer';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialog from './dialog';


let mapStateToProps = (state) => {
    
    return {
        dialogsPage: state.dialogsPage
    }
}


export default compose(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
) (Dialog);