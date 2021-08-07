// import StoreContext from "../../StoreContext";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

// const SidebarContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 let state = store.getState();
//
//                 return <Sidebar friends={state.sidebar.friends}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

 const SidebarContainer = connect(mapStateToProps) (Sidebar)

export default SidebarContainer;