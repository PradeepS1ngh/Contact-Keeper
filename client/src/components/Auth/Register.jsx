import React,{useState , useContext} from 'react'
import AlertContext from '../../Context/Alert/AlertContext';

const Register = () => {

    const alertContext  = useContext(AlertContext); 
    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name : '',
        email : '',
        password1 : '',
        password2 : '',
    })
    const {name ,email ,password1 ,password2} = user;

    const onchange = e => setUser({...user , [e.target.name] : e.target.value})

    const onsubmit = e => {
        e.preventDefault();
        if( name=== '' || email === '' || password1 === '' || password2 === ''){
            setAlert('Please Fill All the Details' , 'danger')
        }else if(password1 !== password2){
            setAlert('Password Not Match !' , 'primary');
        }else{
            setAlert('Register Successfully' , 'success');
            setUser({
                name : '',
                email : '',
                password1 : '',
                password2 : '',
            })
        }
    }

    return ( 
        <div className='container' style={{width:'40%' , marginTop:'10vh'}}>
            <h1 className='text-center'>Account <span className='text-primary'>Register</span></h1>
            <form onSubmit={onsubmit}>
                <div className='m-lg-3'>
                    <label htmlFor="name">Name</label>
                    <input className='form-control' type="text" name='name' value={name} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="email">Email</label>
                    <input className='form-control' type="email" name='email' value={email} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="password" name='password1' value={password1} onChange={onchange} minLength='6'/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="password">Confirm Password</label>
                    <input className='form-control' type="password" name='password2' value={password2} onChange={onchange} minLength='6'/>
                </div>
                <button className='btn btn-primary w-100 m-lg-1'>Register</button>
            </form>
        </div>
    );
}

export default Register;