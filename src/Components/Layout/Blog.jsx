
import ReactPDF from '@react-pdf/renderer';
import React from 'react';


const Blog = () => {

const click = ()=>{ReactPDF.render(<Blog></Blog>, `/example.pdf`);}

    return (
        <div>            
            
            <button onClick={click}>click</button>
            <div className='flex flex-col justify-center items-center h-[900px] w-full p-[200px] mt-[100px]'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[25px] font-bold text-left'>1. Difference beetween controlled and uncoltrolled component?</h1>
                <p className='text-left text-[18px] font-semibold'>In short we can say a controlled component is a component that is dependent on it's parents value. it change it's value or behavior according to the value passed to it from it's parent component. coontrolled component change its state when parent component change it. On the other hand Uncontrolled component is the opsite type. it has it's own state. and it don't have to depend on any other props value like controlled components does. we can say , controlled component is a dependent component and unControlled component is a not free component in short.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[25px] font-bold text-left'>2. How to validate React props using PropTypes?</h1>
                <p className='text-left text-[18px] font-semibold'>Props, or Properties are used in react to transfer data from one compnent to another. But sometimes when we pass the data, we find that data might not be the type we defined before . it happends mainly when a reading database form external links. javascript don't have a built in solution for that. BUt react has it' s own internal machanism for this problem. you can even use propsTypes library for that. but remember that, propsType is only can be used for development purposes. lets have an example:                    
                </p>
                <pre>
                    <code>
                    <img src="https://i.ibb.co/9s7tmzt/uppy.png" />
                    </code>
                </pre>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[25px] font-bold text-left'>3. Differ Nodejs vs Express Js</h1>
                <p className='text-left text-[18px] font-semibold'>Nodejs is a opensource cross platform runtime environment to run javascript outside of a browser. What most people are confunsed of about Nodejs is , they think nodejs is a programming language, or many people think of it as it is a frameworks. But nodejs is neither a programming language nor a javascript framework.
                    on the other hand Express js is a nodejs framework that makes it easy to get the best use of javascript and even more feature is provided than nodejs. nodejs don't have routing while  express can easily handle that. node js is build on chromes v8 engine. and express is build on nodejs.
                    node is written in c,c++ and express is written in javascript etc. there are so many more differences between the two of them.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[25px] font-bold text-left'>About Custom hooks in react.</h1>
                <p className='text-left text-[18px] font-semibold'>Hooks are new addition in react v.16.8 or later. And it makes it so easy to get a value state changing funtionality. while we had to write a lot of code to see if a state is changed, we now can get the state in a short amount of word code written. thnk about a user is online or offline? we have to know his status by writting a learge amount of code if we don' t use hooks, but when we do use, the hook get the data status  from the server doing it's work internally, and shows us if the user is online or offline. the most used hooks to get data status form server is useEffect() hook. </p>
            </div>
        </div>
        </div>
    );
};

export default Blog;