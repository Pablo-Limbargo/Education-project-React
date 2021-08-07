import StoreContext from "../../StoreContext";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                return <Sidebar friends={state.sidebar.friends}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;