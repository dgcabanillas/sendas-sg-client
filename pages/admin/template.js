import React from 'react';
import HomeLayout   from 'components/layout/HomeLayout';
import withIndexing from 'src/HOC/withIndexing';

const AdminTemplate = () => {
    return (
        <div>
            
        </div>
    )
}

const Component = withIndexing(AdminTemplate, '');
Component.layout = HomeLayout;

export default Component;
