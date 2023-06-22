import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProvider';
import ActiveLink from '../Routes/ActiveLink';
import Loading from './Loading';

const Navbar = () => {
    const {loading} = useContext(AuthContext)
    const {user,logout} = useContext(AuthContext)
    const logoutHandle =()=>{
        logout()
    }
    return (
        <div>
            
              <div className="navbar h-[80px] bg-transparent w-full justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to='/' >Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            <li tabIndex={0}>
                                <Link to='/' className="justify-between">
                                    More
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><ActiveLink to='/our+chefs'>Chef Details</ActiveLink></li>
                                    <li><ActiveLink to='/see+recipes'>Recipes Table</ActiveLink></li>
                                </ul>
                            </li>
                            <li><ActiveLink to='/login'>Login</ActiveLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className='rounded-full w-[60px]' src="https://i.ibb.co/Dw4Hrvt/deshi-khabar.png" alt="logo not found!" title='Deshi-Khabar e Beshi SHaadh'/></a>
                </div>
                <div className="font-bold text-[20px] navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            
                            <li tabIndex={0}>
                                <Link to='/' className="justify-between">
                                    More
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-white">
                                    <li><ActiveLink to='/our+chefs'>Chef Details</ActiveLink></li>
                                    <li><ActiveLink to='/see+recipes'>Recipes Table</ActiveLink></li>
                                </ul>
                            </li>
                            <li><ActiveLink to='/login'>Login</ActiveLink></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                               loading? <Loading></Loading>: <img src={user?`${user.photoURL?user.photoURL:''}`:"https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="} title={user?`${user.email?user.email:user.displayName}`:''}/>}
                        </div>
                    </label>
                    <ul tabIndex={0} className={`${user?'':'hidden'} menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}>
                        <li>
                            <Link to='/profile' className="justify-between">
                                Profile 
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logoutHandle}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;