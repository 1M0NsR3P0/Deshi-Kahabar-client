import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProvider';
import Loading from './Loading';

const Profile = () => {
    const [showClass,setShow] = useState(false) 
    const { user, loading, update } = useContext(AuthContext)
    console.log(user)
    const getUrl = (e)=>{
        e.preventDefault()
        const url = e.target.url.value
    }
    const getInput =(e)=>{
    e.preventDefault()
    const oldPass = e.target.oldpass.value
    const newPass = e.target.oldpass.value
    const confirmPass = e.target.oldpass.value
    }



    return (
        <div>
            {
                loading ? <Loading></Loading>
                    : <div name='preview'>
                        <div className='flex justify-center items-center'><img className='' src={user.photoURL} alt="" /></div>
                        <div onClick={''} className='flex justify-center items-center'>
                            <p><img src="https://i.ibb.co/vwxzz3W/edit-icon-vector-illustration.png" className='w-5 h-5' alt="icon not found" /></p>
                            <form onBlur={getUrl}>
                                <div className={showClass?'block':'hidden'}>
                                <input type="text" name='url' placeholder='photo url' />
                                <button onClick={()=>update(url)}>Set</button>
                                </div>
                            </form>
                            </div>

                        <div className='flex justify-center items-center'>
                            <h1>{user.displayName}</h1>
                            <span><img src="https://i.ibb.co/vwxzz3W/edit-icon-vector-illustration.png" className='w-5 h-5' alt="icon not found" /></span></div>
                        <div><p className='disabled text-center'>{user.email}</p></div>
                        <div className='text-center'>
                            <form onBlur={getInput}>
                                <p>edit pass</p>
                                <li className='text-center'><input className='m-2 p-4 rounded-[15px]' type="password" placeholder='enter old password' name="oldPass" id="oldpass" /></li>
                                <li className='text-center'><input className='m-2 p-4 rounded-[15px]' type="password" placeholder='enter new password' name="newPass" id="new" /></li>
                                <li className='text-center'><input className='m-2 p-4 rounded-[15px]' type="password" placeholder='confirm new password' name="confirmPass" id="confirm" /></li>
                            </form></div>
                    </div>
            }
        </div>

    );
};

export default Profile;