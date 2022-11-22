import React from 'react';
import './bday.css';
//import './birthdata.js';
//import birthdata  from './birthdata.js';

function BirthDay(props){
   
 const current_year=new Date().getFullYear();
 const birth_year=new Date(props.birthdate).getFullYear();
 let years_old=current_year-birth_year;
 const no_of_days_left=new Date(2022,12,31).getDate()-new Date().getDate();
 const no_of_months_left=new Date('2022-12-31').getMonth()-new Date().getMonth();
   const date_of_birth=(new Date(props.birthdate).getDate())-1;
   const birth_month=new Date(props.birthdate).getMonth();
   let total_no_of_days =no_of_days_left+date_of_birth;
   let total_no_of_months=(no_of_months_left)+birth_month;
   
    if(total_no_of_days>29){
        var tdl=total_no_of_days-30;
        total_no_of_months=total_no_of_months+1;
    } 
    else{
        tdl=total_no_of_days;
    }
    if(total_no_of_months>11){
       var tml=total_no_of_months-12;
           
    }
    else{
        tml=total_no_of_months;
    }
   // const temp=new Date().getDate();
    if(tdl===0 && tml===0){
        years_old++;
    }
  
   let birthday_wish=tdl===0 && tml===0?<h3 style={{color:'red'}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTMl-wt3aEc4YTaW0yJjDSRhOFosnsCQmBA&usqp=CAU' alt='pic' className='balloons'/>{`Happy Birth Day Dear`}</h3>:<h5>{'Wait for your birthday Wish'}</h5>;
   return(
        
        <div className='bday'>
           
            
            <h5 style={{color:'white', textAlign:'center',fontSize:'17px'}}>Birth Day Reminder</h5>
                <div className='pic'>
                <img src={props.imgurl} alt="pic" className='pic' />
               </div>
            <h4>{` ${props.name  } you  completed ${years_old} years of age !`}</h4>
            <h3>{` next birth day in ${tml} months and${tdl}  day(s)!!!`}</h3>
          <div style={{color:'green', textAlign:'center',fontSize:'17px',backgroundColor:'white', height:'80px'}}>{birthday_wish}</div>
        </div>
        )

}
export default BirthDay