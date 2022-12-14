import Header from "./components/Header";
import Salescard from "./components/SalesCard";
import NotificationButton from "./components/NotificationButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
    
function App() {
    return (    
        <>
            <ToastContainer/>
            <Header/>
            <main>
                <section id="sales">
                    <div className="dsmmeta-container">
                        <Salescard />               
                    </div>
                </section>  
            </main>
        </>
    )
}

export default App;
