import Header from "./components/Header"
import Salescard from "./components/SalesCard"
import NotificationButton from "./components/NotificationButton"
    
function App() {
    return (    
        <>
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

export default App
