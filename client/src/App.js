
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './components/Appnavbar';
import ShoppingList from './components/ShoppingList';
import store from './store'
import {Provider} from 'react-redux'
import ItemModal from './components/ItemModal';



function App() {
  return (
<Provider store={store}>
<div>
     <Appnavbar/>
     <ItemModal></ItemModal>
     <ShoppingList/> 
      
      
      
       </div>
    
</Provider>

    );
}

export default App;
