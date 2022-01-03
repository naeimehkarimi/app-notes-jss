import React from 'react';

const MainLayout = (props) => {
    return ( <div>
        <div>یاد داشت ها</div>

       {props.children}
    </div> );
}
 
export default MainLayout;