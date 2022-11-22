//import logo from './logo.svg';
import './App.css';
import BirthDay from './BirthDay';
//import Container from './container.js';
//import Birthday from 'BirthDay.js';
import birthdata from './birthdata';
import './bday.css';

function App() {
   const bdata=birthdata.map((item)=>{
        return  <BirthDay name={item.name} birthdate={item.bdate} imgurl={item.imgurl}/>

})
  return (
    <div className='display'>
   {/* <Container/>*/}
   {bdata}
   </div>
  )
}

export default App;
